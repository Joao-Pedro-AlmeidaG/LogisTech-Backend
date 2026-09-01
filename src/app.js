const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

// REST Routes
app.use('/api', routes);

// Error Handler
app.use(errorMiddleware);

module.exports = app;
