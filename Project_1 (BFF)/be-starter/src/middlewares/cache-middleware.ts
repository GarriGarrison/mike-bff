import type { NextFunction, Request, Response } from 'express';
import { getFromRedis } from '../redis/redis-utils';
import { CacheError } from '../errors/cache-error';

const cacheMiddleware =
  (ttl = 60) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const cacheKey = req.originalUrl;

    try {
      const cacheData = await getFromRedis(cacheKey);

      if (cacheData) {
        console.log('Data from cache is being used with', cacheKey); // для отладки во время разработки
        return res.send(cacheData);
      }

      res.locals.cacheKey = cacheKey;
      res.locals.ttl = ttl;

      next();
    } catch (error) {
      console.error(error);
      next(new CacheError('Cannot read from Redis'));
    }
  };

export default cacheMiddleware;
