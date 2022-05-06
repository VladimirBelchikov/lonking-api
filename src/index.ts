import express, { Request, Response } from 'express';
import routes from './routes';
import getDbConnection from './db/db.connect';

const app = express();
const PORT: string | number = process.env.PORT || 3000;

/* eslint-disable no-console  */
getDbConnection()
  .then(() => (console.log('connected to db')))
  .catch((err) => console.error(err));

app.use('/', routes);

/* app.use((err, req: Request, res: Response) => {
  res.status(err.status || 400).json({
    success: false,
    message: err.message || 'An error occured.',
    errors: err.error || [],
  });
}); */

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Resource not found.' });
});

app.listen(
  typeof PORT === 'number' ? PORT : parseInt(PORT, 10),
  () => console.log(`server started at ${PORT}`),
);
