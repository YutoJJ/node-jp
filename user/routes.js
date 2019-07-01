//use strict is implicit in module

const router = require('express').Router();

const user = require('./model');

router.route('/user')
  .post((req,res)=>{

    console.log('data from http post',req.body);
    user.create({
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        dateOfBirth: new Date(req.body.dob).getTime()
    }).then(usr => {
        res.send(`user ${usr.firstname} created with id: ${usr._id}`);

    });
})
  .get((req,res)=>{
    user.find().then(usrs=>{
        res.send(usrs);
    });
});

router.route('/:id')
  .get((req,res) =>{
    user.findById(req.params.id).then(usr => res.send(usr));
  })
  .patch((req,res) => {
      res.ok().send('user updated successfully');
  })
  .delete((req,res) => {
      user.findByIdAndDelete(req.params.id).then(() =>res.ok());
  })


module.exports = router;
