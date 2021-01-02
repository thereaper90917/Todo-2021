const {createLogger, transports, format} = require ('winston');

// usage
// logger.info ('some info logging message');
// logger.warn ('some warn logging message');
// logger.error ('some error logging message');
const logger = createLogger ({
  format: format.combine (
    format.timestamp ({format: 'YYYY-MM-DD HH:mm:ss:ms'}),
    format.printf (info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File ({
      filename: './logs/all-logs.log',
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console (),
  ],
});

module.exports = logger;
