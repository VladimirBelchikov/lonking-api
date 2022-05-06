import mongoose from 'mongoose';
import dbConfig from './db.config';

const getDbConnection = () => mongoose.connect(
  `mongodb://${dbConfig.host}/${dbConfig.name}`,
  dbConfig.opts,
);

export default getDbConnection;
