import type { Response } from 'express';
import redisClient from './redis-client';

// ttl - time to live (sec), время жизни данных по ключу
export const saveToRedis = async (key: string, data: any, ttl = 60) => {
  await redisClient.set(key, JSON.stringify(data), {
    EX: ttl,
  });

  console.log('Data stored to Redis'); // для отладки во время разработки
};

export const cacheResponse = async (res: Response, data: any) => {
  if (res.locals.cacheKey) {
    await saveToRedis(res.locals.cacheKey, data, res.locals.ttl);
    console.log('Data was stored to cache'); // для отладки во время разработки
  }
};

export const getFromRedis = async (key: string) => {
  const data = await redisClient.get(key);

  if (data) {
    console.log('Data was received from Redis'); // для отладки во время разработки
    return JSON.parse(data);
  }

  return null;
};
