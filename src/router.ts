import { Request, Response, Router } from 'express';
import path from 'node:path';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';

const upload = multer({
  storage: multer.diskStorage({
    destination(request, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },

    filename(request, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  }),
});

const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryID/products', (request: Request, response: Response) => {
  response.send('OK');
});

// List orders
router.get('/orders', (request: Request, response: Response) => {
  response.send('OK');
});

// Create order
router.post('/orders', (request: Request, response: Response) => {
  response.send('OK');
});

// Change order status
router.patch('/orders/:orderID', (request: Request, response: Response) => {
  response.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderID', (request: Request, response: Response) => {
  response.send('OK');
});

export { router };
