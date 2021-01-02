const mongoose = require ('mongoose');
const chalk = require ('chalk');

// connect to DB function Gets connection string from ENV
const connectDb = async () => {
  try {
    const conn = await mongoose.connect (process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });

    console.log (chalk.blue (`MongoDB Connected ${conn.connection.host}`));
  } catch (error) {
    console.log (error);
  }
};

module.exports = connectDb;
