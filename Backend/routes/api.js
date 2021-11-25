const { json } = require('express');
var express = require('express');
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var uri= "mongodb://192.168.2.230:27017"; // uri to your Mongo database
var client = new MongoClient(uri);
var db; // database 
var name_database="test"
var arraValues=[] // this array where we gonna put the docume
async function run() {
	try {
		var t=await client.connect();
		db = client.db(name_database);
		console.log("db is ready")
	}catch (error){
	//Ensures that the client will close when you finish/error
		console.log(error)
	}
}

function put(value){
	arraValues.push(value)
}

async function getData(){
    await run().catch(console.log)
    let collection=db.collection("test") // collection 
    let values=collection.find()
    values.forEach(put,error=>console.log(error)) 
    console.log(arraValues)
    
}


/* GET home page. */
router.get('/', function(req, res) {
  
    run().catch(console.log)
    res.send(arraValues)

});

module.exports = router;
