import { LOGIN, REGISTER } from '../utils/constants';

import type { User } from '../types';

export default (flow: string) => (req, res, next) => {
  const user: User = req.body;

  switch (flow) {
    case LOGIN: {
      if (user?.email && user?.password) {
        return next();
      }

      return res
        .status(400)
        .send('Email and/ or password are missing from the request.');
    }
    case REGISTER: {
      if (user?.name && user?.email && user?.password) {
        return next();
      }

      return res
        .status(400)
        .send('Name, email and/ or password are missing from the request.');
    }
    default: {
      return next();
    }
  }
};
