import { Request, Response } from 'express';

import { Product } from '../../models/Product';

async function createProduct(request: Request, response: Response) {
  try {
    const imagePath = request.file?.filename;
    const { name, description, price, category, ingredients } = request.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: JSON.parse(ingredients),
    });

    return response.status(201).json(product);
  } catch(err) {
    return response.status(500).json({ error: 'Something went wrong.' });
  }
}

export { createProduct };
