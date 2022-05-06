const dbConfig = {
  name: 'lonking-api',
  host: process.env.HOST_MONGODB || '127.0.0.1:27017',
  opts: {},
};

export default dbConfig;
