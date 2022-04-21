import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import redis from './services/redis';
import mongodb from './services/mongodb';

import routes from './routes';

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use('/api', routes);

app.use((error, _req, res, _next) => {
  res.status(500).send(error);
});

app.listen(port, async () => {
  console.log(`Starting the auth-service on the port: ${port}.`);

  console.log('Waiting for Redis to connect.');
  await redis.connect();
  console.log('Connected to Redis successfully');

  console.log('Waiting for MongoDB to connect.');
  await mongodb.connect();
  console.log('Connected to MongoDB successfully');
});
