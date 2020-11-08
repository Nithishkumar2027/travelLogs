const mongoose = require('mongoose');

const mongoURL = process.env.DB_URL || 'mongodb://localhost:27017/travel-logs';
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
