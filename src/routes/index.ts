import { Router, Request, Response } from 'express';
import { json } from 'body-parser';
import morgan from 'morgan';

import product from './product';

const routes = Router();

routes.use(json());
routes.use(morgan('combined'));

routes.get('/', (req: Request, res: Response) => res
  .status(200)
  .json({ success: true, message: 'It works' }));

routes.use('/api/product', product);

export default routes;
