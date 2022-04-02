import { render } from '@testing-library/react';
import Card from './CardContribute';

const CardsData = [
  {
    name: 'John',
    country: 'Canada',
    imgUrl: '/picture.jpg',
    date: '2022-04-01',
    filter: 'Safe',
  },
];

test('renders all card items', () => {
  const data = CardsData[0];

  const { container } = render(
    <Card
      name={data.name}
      country={data.country}
      imgUrl={data.imgUrl}
      date={data.date}
      filter={data.filter}
    />
  );

  const image = container.querySelector('.card__img');
  expect(image).toBeInTheDocument();
  const regexp = new RegExp(data.imgUrl);
  expect((image as HTMLImageElement).src).toMatch(regexp);

  const description = container.querySelector('.card__description');
  expect(description).toBeInTheDocument();
  expect(description?.textContent).toEqual(data.country + ', ' + data.date);

  const author = container.querySelector('.card__author');
  expect(author).toBeInTheDocument();
  expect(author?.textContent).toEqual(data.name);

  const filter = container.querySelector('.card__filter');
  expect(filter).toBeInTheDocument();
  expect(filter?.textContent).toEqual(`Safety level: ${data.filter}`);
});
