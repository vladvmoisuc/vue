import express from 'express';

import * as controllers from './controllers';
import checkUserData from './middlewares/checkUserData';

import { LOGIN, REGISTER } from './utils/constants';

const router = express.Router();

router.post('/login', checkUserData(LOGIN), controllers.login);
router.post('/register', checkUserData(REGISTER), controllers.register);
router.post('/reset', controllers.reset);

router.get('/activation', controllers.activation);
router.get('/session', controllers.session);

export default router;
