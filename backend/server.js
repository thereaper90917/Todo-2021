const express = require ('express');
const dotenv = require ('dotenv');
const connectDB = require ('./Config/db');
const chalk = require ('chalk');
const morgan = require ('morgan');
const logger = require ('./Middleware/logger');
const apilogger = require ('./Middleware/apiLogger');
// const httpLogger = require ('./Middleware/httplogger');

// Route Files
const todosRoute = require ('./Routes/todosRoute');
// Init App
const app = express ();

// Http Logger Logs Http Request
apilogger.stream = {
  write: message =>
    apilogger.info (message.substring (0, message.lastIndexOf ('\n'))),
};

// Middleware
dotenv.config ({path: './Config/Config.env'});

// implements http logging
app.use (morgan ('tiny', {stream: apilogger.stream}));
// Connect To DB
connectDB ();

// Mount Routers
app.use ('/api/v1/todos', todosRoute);

// Port
const PORT = process.env.PORT || 3000;

app.listen (PORT, () => {
  console.log (
    chalk.blue (`
  
 ._________________.
 | _______________ |
 | I             I |
 | I             I |
 | I             I |
 | I             I |
 | I_____________I |
 !_________________!
    ._[_______]_.
.___|___________|___.
|::: ____           |
|    ~~~~ [Enter]  |
!___________________!
    TODOLIST 2021
    `)
  );

  logger.info (`Server listening on port ${PORT}`);

  console.log (chalk.red (`Server Running on http://localhost:${PORT}`));
});
