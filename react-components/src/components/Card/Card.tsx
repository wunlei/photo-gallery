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
  }

  render() {
    return (
      <div className="card">
        <img className="card__img" src={this.props.imgUrl} alt={this.props.description} />
        <div className="card-body">
          <div className="card__text card__author">by {this.props.author}</div>
        </div>
      </div>
    );
  }
}
export default Card;
