import mongodb from './services/mongodb';

export const users = mongodb.db('REAL_ESTATE').collection('users');
