import { Request, Response } from 'express';

import { Category } from '../../models/Category';

async function listCategories(request: Request, response: Response) {
  try {
    const categories = await Category.find();

    return response.json(categories);
  } catch(err) {
    return response.status(500).json({ error: 'Something went wrong.' });
  }
}

export { listCategories };
