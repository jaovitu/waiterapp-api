import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

const mongoURL = process.env.MONGO_URL;
const port = process.env.PORT;

mongoose.connect(mongoURL as string)
  .then(() => {
    const app = express();
    console.clear();

    console.log('Conectado ao mongodb');
    app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
  })

  .catch(() => console.log('Erro ao conectar ao mongodb'));
