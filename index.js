'use strict';

require('dotenv').config();


const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./db');

db.on('connected',() =>{
  if(process.env.NODE_ENV ==='development'){
    require('./localhost'(app,8000,3000));

  }else{
    require('./production')(app,process.env.PORT);
  }
});


/*
const https = require('https');
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
      res.writeHead(301, { 'Location': 'https://localhost:8000' + req.url });
      res.end();
}).listen(3000);

//const Schema = mongoose.Schema;

const sslkey = fs.readFileSync('../ssl-key.pem');
const sslcert = fs.readFileSync('../ssl-cert.pem');

const options = {
  key: sslkey,
  cert: sslcert
};
*/



const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

//const user =require('./user/model');


////////////////////////////////////////////////
/*
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  dateOfBirth: Date,

});
const user = mongoose.model('User',userSchema);

//to model.js
*/

////////////////////////////////////////////////

db.on('connected',() =>https.createServer(options, app).listen(8000));

app.use('/user',require('./user/routes'));

/*

mongoose.connect('mongodb://localhost:27017/test' , {useNewUrlParser: true}).then(() => {
  console.log('Connected successfully.');
  app.listen(process.env.PORT);
}, err => {
  console.log('Connection to db failed: ' + err);
});

//to db.js
*/

/*
app.post('/user',(req,res)=>{

    console.log('data from http post',req.body);
    user.create({
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        dateOfBirth: new Date(req.body.dob).getTime()
    }).then(usr => {
        res.send(`user ${usr.firstname} created with id: ${usr._id}`);

    });
});

app.get('/user',(req,res)=>{
    user.find().then(usrs=>{
        res.send(usrs);
    });
});
//to routes.js
*/


app.get('/', (req, res) => {
    if(req.secure){
      res.send('Hello SECURE World from JOJO');
    }else{
      res.send('Hello UNSECURE World ...');
    }
    
});

app.get('/test', (req, res) => {
    res.send('Testing is fun');
});

/*
app.post('/user',(req, res)=>{
  console.log('data from ...',req.body);
  res.send();

});
*/
//app.listen(process.env.PORT);

//app.post('/user')

