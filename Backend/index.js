const express = require('express')
const cors = require("cors");
const { default: helmet } = require("helmet");
var morgan = require("morgan");
const { notFound, errorHandler } = require('./middleware');
const { mongoose } = require('mongoose');
const app = express();
const port = 5000;

require('dotenv').config();
const url = process.env.DATABASE_URL
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(port, () => console.log("Server up and running!")))
.catch((error) => console.log(error.message))

app.use(morgan("common"));
app.use(express.json())
app.use(helmet());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
  );
  
  //ROUTES
  app.use('/api/logs',require('./api/logs'))
  app.use('/api/auth',require('./api/auth'))
  // app.use('/api/auth')
  
  
  app.use(notFound);
  app.use(errorHandler);
  
//   app.listen(port, () => {
//   console.log(`TRAVELD BACKEND listening at http://localhost:${port}`);
// });

