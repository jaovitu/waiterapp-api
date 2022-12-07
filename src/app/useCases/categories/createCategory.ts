import { Request, Response } from 'express';
import { Category } from '../../models/Category';

async function createCategory(request: Request, response: Response) {
  try {
    const { icon, name } = request.body;

    const category = await Category.create({ icon, name });

    return response.status(201).json(category);
  } catch(err) {
    return response.status(500).json({ error: 'Something went wrong.' });
  }
}

export { createCategory };
