import React from 'react';
import { CardModal } from 'components/CardModal/CardModal';
import { Portal } from 'components/Portal/Portal';
import { getPhotoDetails } from 'api/Api';
import { PropsCard, StateCard } from './Card.types';
import './Card.scss';

class Card extends React.Component<PropsCard, StateCard> {
  constructor(props: PropsCard) {
    super(props);
    this.state = {
      isActive: false,
      data: { downloads: 0, likes: 0, location: '', tags: '' },
    };
    this.setPhotoData = this.setPhotoData.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    if (!this.state.isActive) {
      this.setPhotoData();
    }
    this.setState((state) => ({
      isActive: !state.isActive,
    }));
  }

  async setPhotoData() {
    const response = await getPhotoDetails(this.props.id);
    const data = {
      downloads: response.downloads,
      likes: response.likes,
      location: '',
      tags: '',
    };

    data.location = [response.location.city, response.location.country]
      .filter((el) => Boolean(el))
      .join(', ');

    data.tags = response.tags
      .map((el) => el.title)
      .slice(0, 3)
      .join(', ');

    this.setState({ data: data });
  }

  render() {
    return (
      <div className="card" onClick={this.toggleModal}>
        <img className="card__img" src={this.props.imgUrl} alt={this.props.description} />
        <div className="card-body">
          <div className="card__text card__author">by {this.props.author}</div>
        </div>

        {this.state.isActive ? (
          <Portal>
            <CardModal
              imgUrl={this.props.imgUrl}
              description={this.props.description}
              likes={this.state.data.likes}
              downloads={this.state.data.downloads}
              author={this.props.author}
              handleClose={this.toggleModal}
              location={this.state.data.location}
              tags={this.state.data.tags}
            />
          </Portal>
        ) : null}
      </div>
    );
  }
}
export default Card;
