var express = require('express');
var router = express.Router();
const mongo = require('mongodb');
var ObjectId = require('mongodb').ObjectId;
// Mongo URI
const MongoClient = require("mongodb").MongoClient;
var stream = require('stream');
var uri="mongodb://localhost:27017"
var client = new MongoClient(uri);
var name_database="stalker1"

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
//run().catch(console.log)
//// Generate and validate Token

// Insert User
async function InsertClient(client){

    let collection = db.collection("clients") // collection users
    let codeDANON
    let codeCOLA
    let codeFGD
    let codeQR

    client.codes.forEach(v => {
        if(v.nbr===1) codeDANON=v.value
        if(v.nbr===2) codeCOLA=v.value
        if(v.nbr===3) codeFGD=v.value
        if(v.nbr===4) codeQR=v.value
    })
    var id_pv;
    var id_NFC;
    await test(db,client.NomPrenom,client.PVPhoto).then(s=>id_pv=s._id,err=>console.log(err))
   await test(db,client.NomPrenom,client.NFCPhoto).then(s=>id_NFC=s._id,err=>console.log(err))  //PV photo
        console.log(id_NFC)
        console.log(id_pv);
        console.log("--------------"+client.lat)
    await collection.insertOne({
            codeDANON:codeDANON,
            codeCOLA:codeCOLA,
            codeFGD:codeFGD,
            codeNFC:client.codeNFC,
            codeQR:codeQR,
            NFCPhoto:id_NFC,
            lat:client.lat,
            lon:client.lon,
            TypeDPV:client.TypeDPV,
            NomPrenom:client.NomPrenom,
            PhoneNumber:client.PhoneNumber,
            PVPhoto:id_pv,
            status:client.Status
        })
    console.log('Client Inserted by function')

}

router.get('/', async function(req,res){

   cursor = await db.collection("clients").find({}).toArray();
  if ((db.collection("clients").find({}).count()) === 0) {

    console.log("No documents found!");

  }
  console.log(cursor)

  res.json(cursor)


});

router.post('/Add',async(req,res)=>{
    let client=req.body;
    console.log(client)
    await InsertClient(client);
    res.status(200).send("Client Inserted From Ang")

})


router.post('/addClient',async (req,res)=>{
    res.status(200).json("done")
})


/// gridFS script 
function getFileSystemItem(dbo,id) {
    var buf = new Buffer('');
    return new Promise(function(resolve, reject) {
      var bucket = new mongo.GridFSBucket(dbo);
      var readstream = bucket.openDownloadStream(ObjectId('61b36b5b074c20c0ff1d7b74'));
      readstream.on('data', (chunk) => {
        buf = Buffer.concat([buf, chunk]);
      });
      readstream.on('error', (err) => {
          reject(err);
      });
      readstream.on('end', () => {
          var res = buf.toString();
          buf = null; // Clean up memory
          readstream.destroy();
          resolve(res);
      });
    });
}
  
function putFileSystemItem(dbo, filename, data) {
  var putItemHelper = function(bucket, resolve, reject) {
    var writeStream = bucket.openUploadStream(filename);
    var s = new stream.Readable();
    s.push(data);
    s.push(null); // Push null to end stream
    s.pipe(writeStream);
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  };
  return new Promise(function(resolve, reject) {
    var bucket = new mongo.GridFSBucket(dbo);
    bucket.find({filename: filename}).count(function(err, count) {
      if (err) return reject(err);
      if (count > 0) {
          bucket.delete(filename, function() {
          putItemHelper(bucket, resolve, reject);
        }, reject)
      } else {
        putItemHelper(bucket, resolve, reject);
      }
    }, reject);
  });
}

async function test(db,filename,data) {
    return putFileSystemItem(db,filename,data) 
}

module.exports = router;
