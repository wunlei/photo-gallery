import { rest } from 'msw';
import { BASE_URL_API, Endpoints } from 'constants/apiConstants';
import { SearchData } from './SearchData';
import { PictureData } from './PictureData';

export const handlers = [
  rest.get(`${BASE_URL_API}${Endpoints.search}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: SearchData }));
  }),
  rest.get(`${BASE_URL_API}${Endpoints.photo}/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PictureData));
  }),
];
