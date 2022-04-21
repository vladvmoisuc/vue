import { createClient } from 'redis';

const client = createClient({
  url: process.env.REDIS_URL,
});

client.on('error', (error: Error) => console.log('Redis Client Error', error));

export default client;
