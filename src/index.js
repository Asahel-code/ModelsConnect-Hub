require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require("path");
const credentials = require('./middleware/credentials');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const mongoose = require("mongoose");
const connectDB = require('../src/config/dbConnection');
const v1RegisterRoutes = require('./v1/routes/registerRoute');
const v1AuthRoutes = require('./v1/routes/authRoutes');
const v1ModelRoutes = require('./v1/routes/modelRoutes');
const v1ClientRoutes = require('./v1/routes/clientRoutes');
const v1ModelsBookingRoutes = require('./v1/routes/modelsBookingRoutes');

connectDB();
app.use(logger);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/register', v1RegisterRoutes);
app.use('/api/v1/auth', v1AuthRoutes);
app.use('/api/v1/models', v1ModelRoutes);
app.use('/api/v1/clients', v1ClientRoutes);
app.use('/api/v1/models_bookings', v1ModelsBookingRoutes);

__dirname = path.resolve('./');
app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/dist/index.html'))
);

app.use((error, req, res, next) => {
  res.status(error?.status || 500).send({ message: error?.message || error });
});

let PORT;

if (process.env.NODE_ENV === 'development') {
  PORT = process.env.DEV_PORT
}

if (process.env.NODE_ENV === 'production') {
  PORT = process.env.PROD_PORT
}
else {
  PORT = process.env.PROD_PORT
}

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
  app.listen(PORT, () => console.log(`Server running on ${PORT} ... \nAccess it on http://localhost:${PORT}`));
});