const mongoose = require('mongoose');
require('dotenv').config();

const dbConfig = {
    uri: process.env.DB_URI,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
};

const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.uri, dbConfig.options);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = {
    connectDB,
};