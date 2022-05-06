import { Router } from 'express';

import list from './list';
import create from './create';

const product = Router();

product.post('/', create);

product.get('/', list);

export default product;
