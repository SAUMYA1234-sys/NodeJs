const EventEmitter = require('events');


var url = "http://mylogger.io/log"


class Logger extends EventEmitter{
    log(msg){
        console.log('inside logger');
        console.log(msg);
    
        this.emit('event invoke',{url:1,val:"argument"});
    }
}





module.exports = Logger;


