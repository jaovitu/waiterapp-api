import path from 'node:path';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

const mongoURL = process.env.MONGO_URL;
const port = process.env.PORT;

import { router } from './router';

mongoose.connect(mongoURL as string)
  .then(() => {
    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    console.clear();

    console.log('Conectado ao mongodb');
    app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
  })

  .catch(() => console.log('Erro ao conectar ao mongodb'));
