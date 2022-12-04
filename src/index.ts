import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.clear();
  console.log(`Server is running at http://localhost:${port}`);
});
