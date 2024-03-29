import { ICardContribute } from 'components/FormContribute/FormContribute.types';
import './CardContribute.scss';

function CardContribute(props: ICardContribute) {
  return (
    <div className="card card-contribute">
      <img className="card__img card-contribute__img" src={props.imgUrl} alt="" />
      <div className="card-body">
        <div className="card__text card__author">{props.name}</div>
        <div className="card__text card__description">
          {props.country}, {props.date}
        </div>
        <div className="card__text card__filter">Safety level: {props.filter}</div>
      </div>
    </div>
  );
}

export default CardContribute;
