import React from 'react';
import './Card.scss';

import { ReactComponent as LikeIcon } from '../../assets/icons/like.svg';
import { ReactComponent as ViewIcon } from '../../assets/icons/view.svg';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';

interface IProps {
  imgUrl: string;
  description: string;
  likes: number;
  views: number;
  downloads: number;
  author: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class Card extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  toShortNumber(num: number) {
    return num.toLocaleString('en-GB', { notation: 'compact', compactDisplay: 'short' });
  }

  render() {
    return (
      <div className="card">
        <img className="card__img" src={this.props.imgUrl} alt="" />
        <div className="card-body">
          <div className="card__text card__description">{this.props.description}</div>
          <div className="card__text card__author">by {this.props.author}</div>
        </div>
        <div className="card-footer">
          <div className="card-footer__item card__likes">
            <LikeIcon className="card__icon" />
            <span className="card-footer__text card__likes-count">
              {this.toShortNumber(this.props.likes)}
            </span>
          </div>
          <div className="card-footer__item card__views">
            <ViewIcon className="card__icon" />
            <span className="card-footer__text card__views-count">
              {this.toShortNumber(this.props.views)}
            </span>
          </div>
          <div className="card-footer__item card__downloads">
            <DownloadIcon className="card__icon" />
            <span className="card-footer__text card__downloads-count">
              {this.toShortNumber(this.props.downloads)}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
