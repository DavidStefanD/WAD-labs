'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const app = express();
const port = 3000;

import routes from './routes.js'; 
app.use("/", routes);




app.listen(port, () => logger.info(`Your app is listening on port ${port}!`));


