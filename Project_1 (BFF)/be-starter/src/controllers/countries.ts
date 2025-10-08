import type { NextFunction, Request, Response } from 'express';
import transformCountry from '../converters/transform-country';
import { NotFoundError } from '../errors/not-found-error';
import { BASE_URL } from '../constants/urls';
import getNeighbors from '../services/get-neighbors';

export const getAllCountries = async (req: Request, res: Response) => {
  const response = await fetch(
    BASE_URL + 'all?fields=name,capital,flags,population,region'
  );

  const data = await response.json();

  res.send(data);
};

export const getCountryByName = async (req: Request, res: Response, next: NextFunction) => {
  const name = req.params.name;

  const response = await fetch(`${BASE_URL}name/${name}`);

  const data = await response.json();

  const country = data[0];

  // if (!country) throw new Error('Not found'); // так работает начиная с 5-й версии express
  if (!country) return next(new NotFoundError('Country not found'));

  const codes = country.borders?.join(',');
  let neighbors = [] as any[];

  if (codes) {
    neighbors = await getNeighbors(codes);
  }

  const preparedCountry = transformCountry(country) as any;
  preparedCountry.neighbors = neighbors;

  res.send(preparedCountry);
};

//* Убираем в рамках оптимизации
// export const getCountriesByCode = async (req: Request, res: Response) => {
//   const codes = req.query.codes

//   const response = await fetch(`${BASE_URL}alpha?codes=${codes}`);

//   const data = await response.json();

//   res.send(data);
// }
