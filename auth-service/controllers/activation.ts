import { Users } from '../services/mongodb';

export default async (req, res, next) => {
  try {
    if (!req?.query?.secret) {
      return res
        .status(400)
        .send('The request is missing the secret in the params.');
    }

    const query = {
      activationSecret: req?.query?.secret,
    };

    const account = await Users?.findOne(query);

    if (!account) {
      return res.status(404).send('There is no account to be activated here.');
    }

    if (account?.active) {
      return res.status(409).send('Your account is already active.');
    }

    if (account && !account?.active) {
      console.log('here');
      await Users.updateOne(query, { $set: { active: true } });

      return res.status(201).send('Your account was succesfully activated.');
    }
  } catch (error) {
    next(error);
  }
};
