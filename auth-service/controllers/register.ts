import bcrypt from 'bcrypt';
import cryptoRandomString from 'crypto-random-string';

import email from '../services/nodemailer';

import { Users } from '../services/mongodb';

import type { User } from '../types';

export default async (req, res, next) => {
  try {
    const account = await Users?.findOne({ email: req.body.email });

    if (account?.active) {
      return res
        .status(409)
        .send('The email is currently used by another user.');
    }

    if (account && !account.active) {
      return res.send(
        `We've sent you already a confirmation email. Please use the activation link from that email.`
      );
    }

    const user: User = {
      ...req.body,
      active: false,
      createdAt: +Date.now(),
      activationSecret: cryptoRandomString({ length: 120, type: 'url-safe' }),
    };

    user.password = await bcrypt.hash(user.password, 10);

    await Users.insertOne(user);

    await email({
      to: user.email,
      subject: `Confirm your maplace account, ${user.name}`,
      html: `
      <html>
        <body>
          <a href="http://localhost:8080/confirmation?secret=${user.activationSecret}/>
        </body>
      </html>`,
    });

    res.status(201).send('The account was succesfully created.');
  } catch (error) {
    next(error);
  }
};
