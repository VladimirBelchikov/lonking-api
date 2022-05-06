import { NextFunction, Request, Response } from 'express';
import Product from '../../models/product';

const list = (req: Request, res: Response) => {
  const product = Product.find({});
  res.status(200).send(product);
};

const create = (req: Request, res: Response, next: NextFunction) => {
  console.log('--------------------------------');
  console.log(`req.body is ${req.body}`);
  console.log(typeof req.body);
  console.log('--------------------------------');

  if (('title' in req.body && 'price' in req.body)
    && (typeof req.body.title === 'string' && typeof req.body.price === 'number')) {
    const { title, price } = req.body;
    const product = new Product({ title, price });
    product.save()
      .then(res.status(201).send(product))
      .catch((err) => next({ status: 400, error: [err] }));
  }
  next({ status: 400, error: 'Wrong data' });
};

export { list, create };
