
const config = require('config');
const helmet = require('helmet');
const morgan  = require('morgan');
const Joi = require('joi'); 
const express = require('express');
const app = express();
const debug = require('debug');
const courses =  require('./routes/courses');
const home = require('./routes/home');


app.set('view engine','pug');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));
app.use('/api/',courses);
app.use('/',home);
//console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
//console.log(`app:${app.get(`env`)}`)
if(app.get('env')==='development'){
  
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}

console.log('applicatn name:'+ config.get('name') );
console.log('mail server:'+config.get('mail.host') );
console.log('mail password:'+config.get('mail.password') );



const port = process.env.port;
app.listen(3000,()=>console.log(`listened here.. ${port}`));