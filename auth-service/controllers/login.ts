import path from 'path';
import fs from 'fs/promises';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import redis from '../services/redis';
import { Users } from '../services/mongodb';

const expireIn12Hours = 60 * 60 * 12; // 12 hours

export default async (req, res, next) => {
  try {
    const account = await Users?.findOne({ email: req.body.email });

    if (!account) {
      return res.status(401).send(`You don't have an account on our platform.`);
    }

    const isAccountOwner = await bcrypt.compare(
      req.body.password,
      account.password
    );

    const secret = await fs.readFile(path.join(__dirname, '../secret.pem'));

    if (isAccountOwner) {
      const token = jwt.sign(
        { name: account.name, email: account.email },
        secret,
        {
          algorithm: 'RS256',
          expiresIn: expireIn12Hours,
        }
      );

      await redis.set(account.email, token, {
        EX: expireIn12Hours,
      });

      return res
        .status(200)
        .cookie('Token', token, {
          // Converting seconds to miliseconds
          maxAge: expireIn12Hours * 60,
        })
        .send(`You've succesfully logged in.`);
    }

    return res.status(401).send(`You are not the owner of this account.`);
  } catch (error) {
    next(error);
  }
};
