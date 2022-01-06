//const { json } = require('express');
var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;
const MongoClient = require("mongodb").MongoClient;
//var uri= "mongodb://192.168.2.230:27017"; 
 var uri= "mongodb://localhost:27017"; // uri to your Mongo database
var client = new MongoClient(uri);
var db; // database 


var name_database="stalker1"
const jwt=require("jsonwebtoken")
var arraValues=[] // this array where we gonna put the document 



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

//verfiy token
function verifyToken(req, res, next) {
	if(!req.headers.authorization) {
	  return res.status(401).send('Unauthorized request')
	}
	let token = req.headers.authorization.split('bearer ')[1]
	if(token === 'null') {
	  return res.status(401).send('Unauthorized request')    
	}
	let payload = jwt.verify(token,'secretKey')
	if(!payload) {
	  return res.status(401).send('Unauthorized request')    
	}
	req.userId = payload.subject
	next()
  }

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
    //console.log(arraValues)
	//return values; 
}

/* GET . */
router.get('/clientss', async(req, res)=> {

    let collection=await db.collection("geometries") // collection 
	var values=await collection.find({'geometry.geometry.type':'Point'}).toArray()
	//console.log(values)
	console.log("--- send data -----------")
	res.json(values)

});

router.get('/secteurss', async(req, res)=> {
	let collection=await db.collection("geometries") // collection 
	var values=await collection.find({'geometry.geometry.type':'MultiPolygon'}).toArray()
	console.log("---------  send data -----------")
	res.json(values)

});


/* GET Sectors Based on User */
router.get('/secteurs',verifyToken,async(req,res)=>{
	var userId=req.userId;
	let collectionSec=await db.collection("secteurs") // collection where ids are stored  
	let collectiongeom=await db.collection("geometries") // collection where details are stored 
	var values=await collectionSec.aggregate([
		{ $match : { users : ObjectId(userId)}} ,
		{$project:{nameSecteur:1,_id:0}}
   ]).toArray();
   var arrv=[];
   values.forEach(elm=>arrv.push(elm.nameSecteur),err=>console.log(err))

   console.log(arrv)
   var sec=await collectiongeom.find({'geometry.geometry.type':'MultiPolygon','geometry.properties.idSecteur': { $in: arrv}}).toArray()
	res.json(sec)
})
/* GET clients Based on User */
router.get('/clients',verifyToken,async (req,res)=>{
	var userId=req.userId;
	let collectionSec=await db.collection("secteurs") //collection where ids are stored 
	let collectiongeom=await db.collection("geometries")
	var values=await collectionSec.aggregate([
		{ $match : { users : ObjectId(userId)}} ,
		{$project:{points:1,_id:0}}
   ]).toArray();
   var arrv=[];
   values.forEach(elm=>{
	   console.log(elm.points[0].point)
	   elm.points.forEach(e=>arrv.push(ObjectId(e.point)),err=>console.log(err))
	},err=>console.log(err))
   var sec=await collectiongeom.find({'geometry.geometry.type':'Point','_id': { $in: arrv}}).toArray()
	res.json(sec)
})

module.exports = router;
