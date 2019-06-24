'use strict';

require('dotenv').config();


const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./db');

//const Schema = mongoose.Schema;


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

db.on('connected',() =>app.listen(process.env.PORT));

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
    res.send('Hello World');
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

