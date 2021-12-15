var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
const cors=require("cors")
require("dotenv").config();
var api = require('./routes/api1');
var users=require('./routes/users')
var client=require('./routes/client')

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
app.use('/api1', api);
// app.use('/users', users);
// app.use('/client', client);


app.listen(Port, function () {
    console.log("Server is runing on :"+Port);
});
