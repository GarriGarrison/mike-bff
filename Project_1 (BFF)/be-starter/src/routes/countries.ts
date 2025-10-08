import { Router } from 'express';
import {
  getAllCountries,
  // getCountriesByCode,
  getCountryByName,
} from '../controllers/countries';

const router = Router();

router.get('/', getAllCountries);
router.get('/name/:name', getCountryByName);
// router.get('/alpha', getCountriesByCode); // Убираем в рамках оптимизации

export default router;
