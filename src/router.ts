import { Request, Response, Router } from 'express';

const router = Router();

// List categories
router.get('/categories', (request: Request, response: Response) => {
  response.send('OK');
});

// Create category
router.post('/categories', (request: Request, response: Response) => {
  response.send('OK');
});

// List products
router.get('/products', (request: Request, response: Response) => {
  response.send('OK');
});

// Create product
router.post('/products', (request: Request, response: Response) => {
  response.send('OK');
});

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
