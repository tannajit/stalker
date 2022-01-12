var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
const cors=require("cors")
require("dotenv").config();
var api = require('./routes/api1');
var users=require('./routes/users')
var client=require('./routes/client')
var fs = require('fs');

const Port = process.env.PORT || 3000 
var app = express();
app.use(cors())

app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
 });


app.use(bodyParser.json({limit: "5000mb"}));
app.use(bodyParser.urlencoded({limit: "5000mb", extended: true, parameterLimit:50000000}));
app.use(express.static("frontend"))

app.get('/', (req, res) => {
    res.sendFile('frontend\\index.html',{root:__dirname})
});

///  
//var credentials = {key: privateKey, cert: certificate};


app.get('/', function(req,res){
    res.status(200).send('Hello');
});
app.use('/api1', api);
// app.use('/users', users);
// app.use('/client', client);

var assetlinks = fs.readFileSync('assetlinks.json');
app.get('/.well-known/assetlinks.json', function(req, res, next) {
     res.set('Content-Type', 'application/json');
     res.status(200).send(assetlinks);
});

app.listen(Port, function () {
    console.log("Server is runing on :"+Port);
});

/***************************https */

/// SSL for https
// var https = require('https');
// var privateKey  = fs.readFileSync('/etc/ssl/private/nginx-selfsigned.key', 'utf8');
// var certificate = fs.readFileSync('/etc/ssl/certs/nginx-selfsigned.crt', 'utf8');
/// run https
// var httpsServer = https.createServer(credentials, app);

// httpsServer.listen(8443,function(){
// 	console.log("server https is runing on : "+8443);
// });
