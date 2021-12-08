//const { json } = require('express');
var express = require('express');
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var uri= "mongodb://192.168.2.230:27017"; 
// var uri= "mongodb://localhost:27017"; // uri to your Mongo database
var client = new MongoClient(uri);
var db; // database 
var name_database="stalker1"
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
run().catch(console.log)

function put(value){
	arraValues.push(value)
}

async function getData(){
    var  arrValues=[]
    let collection=db.collection("geometries") // collection 
	let values=collection.find({'geometry.geometry.type':'Point'})
    values.forEach(value=>{arrValues.push(value)},error=>console.log(error)) 
	console.log(arrValues)
	return arrValues;
    // console.log(arraValues)
	// return values;  
}


/* GET home page. */
router.get('/clients', async(req, res)=> {
  
    //run().catch(console.log)
	//arrValues=[]
    let collection=await db.collection("geometries") // collection 
	//console.log(collection)
	/*let values=collection.find({'geometry.geometry.type':'Point'})
    values.forEach(value=>{arrValues.push(value)},error=>console.log(error)) 
	console.log(arrValues)
    res.send(arrValues)*/
	var values=await collection.find({'geometry.geometry.type':'Point'}).toArray()
	//console.log(values)
	console.log("---send data -----------")
	res.json(values)

});

router.get('/secteurs', async(req, res)=> {
	let collection=await db.collection("geometries") // collection 
	// console.log(collection)
	/*let values=collection.find({'geometry.geometry.type':'Point'})
    values.forEach(value=>{arrValues.push(value)},error=>console.log(error)) 
	console.log(arrValues)
    res.send(arrValues)*/
	var values=await collection.find({'geometry.geometry.type':'MultiPolygon'}).toArray()
	//console.log(values)
	console.log("---send data -----------")
	res.json(values)

});

module.exports = router;
