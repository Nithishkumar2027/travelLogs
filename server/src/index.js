const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// Custom middlewares
const { notFound, errorHandler } = require('./middleware/errorHandlers');

// DB connection
require('./db/connection');

const app = express();
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

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
