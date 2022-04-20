import { AppContext } from 'contexts/AppContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LikeIcon } from '../../assets/icons/like.svg';
import { ReactComponent as PinIcon } from '../../assets/icons/map-pin.svg';
import { ReactComponent as TagIcon } from '../../assets/icons/hash.svg';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';
import './PhotoPage.scss';

function PhotoPage() {
  const navigate = useNavigate();
  const { photoData } = useContext(AppContext);

  function toShortNumber(num = 0) {
    return num.toLocaleString('en-GB', { notation: 'compact', compactDisplay: 'short' });
  }

  useEffect(() => {
    if (!photoData.urls) {
      navigate('/');
    }
  }, []);

  return (
    <main className="page page-photo">
      <button
        className="photo-page__btn btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div className="photo-page__card">
        <img
          className="photo-page__card-img"
          src={photoData.urls}
          alt={photoData.alt_description}
        />
        <div className="card-body">
          <div className="card__text card__author">by {photoData.user}</div>
        </div>
        <div className="card-footer">
          <div className="card-footer__item card__location">
            <PinIcon className="card__icon" />
            <span className="card-footer__text card__location-text">
              {photoData.location || 'Unknown'}
            </span>
          </div>
          <div className="card-footer__item card__likes">
            <LikeIcon className="card__icon" />
            <span className="card-footer__text card__likes-count">
              {toShortNumber(photoData.likes)}
            </span>
          </div>
          <div className="card-footer__item card__downloads">
            <DownloadIcon className="card__icon" />
            <span className="card-footer__text card__downloads-count">
              {toShortNumber(photoData.downloads)}
            </span>
          </div>
          <div className="card-footer__item card__tags">
            <TagIcon className="card__icon" />
            <span className="card-footer__text card__tags-text">{photoData.tags || 'Unknown'}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PhotoPage;
