
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('event invoke', (arg)=>{
    console.log("Hi event invoked, here is the listener",arg);
})
logger.log('message');
