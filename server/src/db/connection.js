const mongoose = require('mongoose');

const mongoURL = process.env.DB_URL;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
