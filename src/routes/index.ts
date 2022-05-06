import { Router, Request, Response } from 'express';
import { json } from 'body-parser';
// import morgan from 'morgan';
import { list, create } from './product/product';

const routes = Router();

routes.use(json());
// routes.use(morgan('combined'));

routes.use((req, res, next) => {
  // do logging
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
  next(); // make sure we go to the next routes and don't stop here
});

routes.get('/', (req: Request, res: Response) => res.status(200)
  .json({ success: true, message: 'It works' }));

// routes.use('/api/product', productRouter);
routes.get('/api/product', list);
routes.post('/api/product', create);

export default routes;
