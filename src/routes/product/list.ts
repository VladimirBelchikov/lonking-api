import Product from '../../models/product';

const list = async (req, res) => {
  const product = await Product.find({});
  return res.status(200).json(product);
};

export default list;
