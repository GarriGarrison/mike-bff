import express from 'express';
import cors from 'cors'
import router from './routes'
import { errorHandler } from './middlewares/error-handler';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(router);
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`);
});
