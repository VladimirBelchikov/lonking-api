import { Request, Response } from 'express';
import Product from '../../models/product';

const create = async (req: Request, res: Response) => {
  const { title, price } = req.body;
  const product = new Product({ title, price });
  await product.save();
  return res.status(201).send(product);
};

export default create;
