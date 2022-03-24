import { render } from '@testing-library/react';
import MainPage from 'views/Main/Main';
import Card from './Card';
import CardsData from './CardsData';

test('renders all cards', () => {
  render(<MainPage />);
  const cardsCount = document.body.querySelectorAll('.card').length;
  const cardsDataCount = CardsData.length;
  expect(cardsCount).toEqual(cardsDataCount);
});

test('renders all card items', () => {
  const data = CardsData[0];

  function toShortNumber(num: number) {
    return num.toLocaleString('en-GB', { notation: 'compact', compactDisplay: 'short' });
  }

  const { container } = render(
    <Card
      imgUrl={data.urls.regular}
      description={data.alt_description}
      likes={data.likes}
      views={data.views}
      downloads={data.downloads}
      author={data.user.name}
    />
  );

  const image = container.querySelector('.card__img');
  expect(image).toBeInTheDocument();
  expect((image as HTMLImageElement).src).toEqual(data.urls.regular);

  const description = container.querySelector('.card__description');
  expect(description).toBeInTheDocument();
  expect(description?.textContent).toEqual(data.alt_description);

  const likes = container.querySelector('.card__likes-count');
  expect(likes).toBeInTheDocument();
  expect(likes?.textContent).toEqual(toShortNumber(data.likes));

  const views = container.querySelector('.card__views-count');
  expect(views).toBeInTheDocument();
  expect(views?.textContent).toEqual(toShortNumber(data.views));

  const downloads = container.querySelector('.card__downloads-count');
  expect(downloads).toBeInTheDocument();
  expect(downloads?.textContent).toEqual(toShortNumber(data.downloads));
});
