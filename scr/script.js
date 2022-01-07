// create DB named testt in your Mongodb 

// to run this script plz open CMD to the folder which this file is existed and run npm install 

// then run  ' node script.js'

const MongoClient = require("mongodb").MongoClient;
//var uri = "mongodb://localhost:27017";
var uri= "mongodb+srv://fgd:fgd123@stalkert.fzlt6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // uri to your Mongo database
var fs = require('fs');
var client = new MongoClient(uri);
var db; // database 
var name_database="stalker2"

async function run() {
	try {
		var t=await client.connect();
		db = await client.db(name_database);
		console.log("\n ---------------- DB is Ready -----------------------------")

		// insert geometries
		const collection = await db.collection('geometries'); 
		PutDataGeometries(collection)  // put data into geomtries

		// insert Secteurs 
		
		var arr=await collection.find({'geometry.geometry.type':'Point'}).toArray() //get goemetries that are tyepe ponits(PDVs)
		InjectSecteurData(arr,db)
	

	}catch (error){
		console.log(error)
	}
}
run().catch(console.log)

var insertedId;  // variable where the ID inserted will be stored 
var insertedIds;  // variable where All IDs inserted will be stored


async function getInsertedIds(result){
	if (result.insertedId!=null){
		insertedId= await result.insertedId
	}else{
		insertedIds=await result.insertedIds
	}
}

async function  putEachData(res,collection){
	collection.insertOne({geometry:res}).then(getInsertedIds).catch(error=>console.log(error))	
	console.log(insertedId)
}

async function PutDataGeometries(collection){
	console.log("\n ---------------- Start adding Data to geometries------------------------------")
	var file_cmg_sectors=JSON.parse(fs.readFileSync("./cmg_geomtries.geojson",{'encoding':'UTF-8'})).features
	var file_onion_sectors=JSON.parse(fs.readFileSync("./onion_geomtries.geojson",{'encoding':'UTF-8'})).features
	var file_cmg_jointure=JSON.parse(fs.readFileSync("./cmg_jointure.geojson",{'encoding':'UTF-8'})).features
	var file_onion_jointure=JSON.parse(fs.readFileSync("./onion_jointure.geojson",{'encoding':'UTF-8'})).features

	file_cmg_sectors.forEach(res=>{ putEachData(res,collection)},err=>console.log(err))
	file_onion_sectors.forEach(res=>{ putEachData(res,collection)},err=>console.log(err))
	file_cmg_jointure.forEach(res=>{ putEachData(res,collection)},err=>console.log(err))
	file_onion_jointure.forEach(res=>{ putEachData(res,collection)},err=>console.log(err))

	console.log("\n ------------------------ End Adding Geometries --------------------------------")


}

async function InjectSecteurData(elem,db){
	console.log("\n --------------------- Start Injecting Sector Data ------------------------------")

	var arrNull=[]  // put Data that Have Null in idSecteur ( didn't join with any sector)
	elem.forEach(value=>{
		var val=value.geometry;
	if(val.properties.idSecteur!=null)
	{
		 
		db.collection("secteurs").updateOne(
			{"nameSecteur":val.properties.idSecteur},{ $addToSet:{ points: {"point":value._id,"route":null}},
			$setOnInsert:{
			            routes:[],
			            typePDV:[],
			            machine:val.properties.machine,
			            secteur:null,
			            users:[]
			            }
			},
			{upsert:true}

			)


	}else{
		arrNull.push(val.properties.Identifiant)
	}
});
	console.log("\n --------------------------- End Injection Data in Sectors -------------------------")
};

