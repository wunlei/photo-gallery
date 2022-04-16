import { useState } from 'react';
import { CardModal } from 'components/CardModal/CardModal';
import { Portal } from 'components/Portal/Portal';
import { getPhotoDetails } from 'api/Api';
import { PhotoData, PropsCard } from './Card.types';
import './Card.scss';

function Card(props: PropsCard) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const emptyData = { downloads: 0, likes: 0, location: '', tags: '' };
  const [cardData, setCardData] = useState<PhotoData>(emptyData);

  async function toggleModal() {
    if (!isModalOpen) {
      await setPhotoData();
    }
    setIsModalOpen(!isModalOpen);
  }

  async function setPhotoData() {
    const response = await getPhotoDetails(props.id);
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

    setCardData(data);
  }

  return (
    <div className="card" onClick={toggleModal}>
      <img className="card__img" src={props.imgUrl} alt={props.description} />
      <div className="card-body">
        <div className="card__text card__author">by {props.author}</div>
      </div>

      {isModalOpen ? (
        <Portal>
          <CardModal
            imgUrl={props.imgUrl}
            description={props.description}
            likes={cardData.likes}
            downloads={cardData.downloads}
            author={props.author}
            handleClose={toggleModal}
            location={cardData.location}
            tags={cardData.tags}
          />
        </Portal>
      ) : null}
    </div>
  );
}

export default Card;
