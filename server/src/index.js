const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// Custom middlewares
const { notFound, errorHandler } = require('./middleware/errorHandlers');

// Routes
const logs = require('./api/logRoutes');

// DB connection
require('./db/connection');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

app.use('/api/logs', logs);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
