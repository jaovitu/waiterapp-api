import { Request, Response } from 'express';

import { Product } from '../../models/Product';

async function listProducts(request: Request, response: Response) {
  try {
    const products = await Product.find();

    return response.json(products);
  } catch(err) {
    return response.status(500).json({ error: 'Something went wrong.' });
  }
}

export { listProducts };
