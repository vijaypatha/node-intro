// This is where our server code will be
//RestFul API's (set of protocal that webdevelopers follow) should be state less, use HTTP verbs,
//expose a directory like

var express = require('express'), //require express(aka file path)
//express? framework of node (layer over the node, interact with node in user friendly way) 1) a router and 2) middleware

_ = require('lodash'), //utility library
bodyParser = require('body-parser'), //bodyParser makes it possible to post JSON to the server
morgan = require('morgan'),
app = express();//create an express app

//middleware is a function (req,res,next) its a bunch of callBacks

//built in middleware

app.use(express.static('client'));
//app.use is ....
// look to this directory for the view

app.use(morgan('combine')); //logger: acts like console.log

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var users = [
  {
    name:"Sally Rally",
    intro: "hello my name is sally",
    age: 24,
    gender: "female"
  }
];

var id = 0;

app.get('/users',function(req,res,next){
  res.json(users);
});

app.listen(3000);
