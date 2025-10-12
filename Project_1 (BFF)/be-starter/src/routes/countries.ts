import { Router } from 'express';
import {
  getAllCountries,
  // getCountriesByCode,
  getCountryByName,
} from '../controllers/countries';
import publicCache from '../middlewares/public-cache';

const router = Router();

router.get('/', publicCache, getAllCountries);
router.get('/name/:name', publicCache, getCountryByName);
// router.get('/alpha', getCountriesByCode); // Убираем в рамках оптимизации

export default router;
