import React from 'react';
import { ReactComponent as LikeIcon } from '../../assets/icons/like.svg';
import { ReactComponent as PinIcon } from '../../assets/icons/map-pin.svg';
import { ReactComponent as TagIcon } from '../../assets/icons/hash.svg';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';
import { CardModalProps, CardModalState } from './CardModal.types';
import './CardModal.scss';

export class CardModal extends React.Component<CardModalProps, CardModalState> {
  constructor(props: CardModalProps) {
    super(props);
  }

  toShortNumber(num = 0) {
    console.log(num);
    return num.toLocaleString('en-GB', { notation: 'compact', compactDisplay: 'short' });
  }

  render() {
    return (
      <>
        <div className="overlay">
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal__btn_close" onClick={this.props.handleClose}></button>
            <img className="modal-card__img" src={this.props.imgUrl} alt="" />
            <div className="modal-card-body">
              <div className="modal-card__text card__description">{this.props.description}</div>
              <div className="modal-card__text card__author">by {this.props.author}</div>
            </div>
            <div className="modal-card-footer">
              <div className="modal-card-footer__item card__location">
                <PinIcon className="modal-card__icon" />
                <span className="modal-card-footer__text card__location-text">
                  {this.props.location || 'Unknown'}
                </span>
              </div>

              <div className="modal-card-footer__item card__likes">
                <LikeIcon className="modal-card__icon" />
                <span className="modal-card-footer__text card__likes-count">
                  {this.toShortNumber(this.props.likes)}
                </span>
              </div>

              <div className="modal-card-footer__item card__downloads">
                <DownloadIcon className="modal-card__icon" />
                <span className="modal-card-footer__text card__downloads-count">
                  {this.toShortNumber(this.props.downloads)}
                </span>
              </div>
              <div className="modal-card-footer__item card__tags">
                <TagIcon className="modal-card__icon" />
                <span className="modal-card-footer__text card__tags-text">
                  {this.props.tags || 'Unknown'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
