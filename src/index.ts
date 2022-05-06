import express, {
  Express, Request, Response,
} from 'express';
import routes from './routes';
import getDbConnection from './db/db.connect';

const app: Express = express();
const PORT: string | number = process.env.PORT || 3000;

app.use('/', routes);
/* eslint-disable no-console  */
getDbConnection()
  .then(() => (console.log('connected to db')))
  .catch((err) => { throw new Error(err); });

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Resource not found.' });
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));
