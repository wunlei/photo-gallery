import { getPhotoDetails } from 'api/Api';
import { PropsCard } from './Card.types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/store';
import { updatePhotoData } from 'store/slices/appSlice';
import './Card.scss';

function Card(props: PropsCard) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function togglePhotoPage() {
    try {
      await setPhotoData();
      navigate(`photo/${props.id}`);
    } catch (err) {
      navigate('404');
    }
  }

  async function setPhotoData() {
    try {
      const response = await getPhotoDetails(props.id);
      const data = {
        downloads: response.downloads,
        likes: response.likes,
        location: '',
        tags: '',
        urls: response.urls.regular,
        user: response.user.name,
        alt_description: response.alt_description,
        sourceLink: response.links.html,
      };

      data.location = [response.location.city, response.location.country]
        .filter((el) => Boolean(el))
        .join(', ');

      data.tags = response.tags
        .map((el) => el.title)
        .slice(0, 3)
        .join(', ');

      dispatch(updatePhotoData(data));
    } catch (err) {
      throw new Error();
    }
  }

  return (
    <div className="card" onClick={togglePhotoPage}>
      <img className="card__img" src={props.imgUrl} alt={props.description} />
      <div className="card-body">
        <div className="card__text card__author">by {props.author}</div>
      </div>
    </div>
  );
}

export default Card;
