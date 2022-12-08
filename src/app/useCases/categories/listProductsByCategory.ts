import { Request, Response } from 'express';

import { Product } from '../../models/Product';

async function listProductsByCategory(request: Request, response: Response) {
  try {
    const { categoryID } = request.params;

    const products = await Product.find().where('category').equals(categoryID);

    return response.json(products);
  } catch(err) {
    return response.status(500).json({ error: 'Something went wrong' });
  }
}

export { listProductsByCategory };
