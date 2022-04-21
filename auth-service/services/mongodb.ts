import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL as string);

export const Users = client.db('real-estate').collection('users');

export default client;
