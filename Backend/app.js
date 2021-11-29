var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
const cors=require("cors")
require("dotenv").config();
var api = require('./routes/api');
var users=require('./routes/users')
//Port=8081;

const Port = process.env.PORT || 3000 
var app = express();
app.use(cors())

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.static("dist"))

app.get('/', function(req,res){
    res.status(200).send('Hello');
});
app.use('/api', api);
app.use('/users', users);

app.listen(Port, function () {
    console.log("Server is runing on :"+Port);
 });
