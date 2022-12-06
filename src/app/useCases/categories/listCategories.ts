import { Request, Response } from 'express';

import { Category } from '../../models/Category';

async function listCategories(request: Request, response: Response) {
  const categories = await Category.find();

  return response.json(categories);
}

export { listCategories };
