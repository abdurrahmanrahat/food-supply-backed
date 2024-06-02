import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { globalErrHandler } from './app/middlewares/globalErrHandler';
import { notFound } from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// global error handler
app.use(globalErrHandler);

// not found route
app.use(notFound);

export default app;
