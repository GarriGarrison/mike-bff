import express from 'express';
import cors from 'cors';
import router from './routes';
import { errorHandler } from './middlewares/error-handler';
import { initRedis } from './redis/redis-client';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(router);
app.use(errorHandler);

const run = async () => {
  try {
    await initRedis();

    app.listen(port, () => {
      console.log(`Server has been started on port ${port}`);
    });
  } catch (error) {
    console.error('Error on server init', error);
  }
};

run();
