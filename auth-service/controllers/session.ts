import path from 'path';
import fs from 'fs/promises';
import jwt from 'jsonwebtoken';

import redis from '../services/redis';

export default async (req, res, next) => {
  try {
    const token = req?.cookies?.Token;

    if (!token) {
      return res.status(401).send('Your access token is missing.');
    }

    const secret = await fs.readFile(path.join(__dirname, '../secret.pem'));

    let decodedToken;

    jwt.verify(
      token,
      secret,
      {
        algorithms: ['RS256'],
      },
      (error, token) => {
        decodedToken = error ? null : token;
      }
    );

    if (!decodedToken) {
      return res.status(401).send('Your token is invalid.');
    }

    const session = await redis.get(decodedToken.email);

    if (!session) {
      return res.status(401).send('Your session has expired.');
    }

    if (session === token) {
      res.status(200).send('Your session is active.');
    }
  } catch (error) {
    next(error);
  }
};
