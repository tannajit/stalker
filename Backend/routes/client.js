var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const jwt=require("jsonwebtoken")
var salt=5 //any random value,  the salt value specifies how much time it’s gonna take to hash the password. higher the salt value, more secure the password is and more time it will take for calculation.

// MongoDataBase
const MongoClient = require("mongodb").MongoClient;
var uri= "mongodb://192.168.2.230:27017"; // uri to your Mongo database if the server is available
//var uri="mongodb://localhost:27017"  // use your local Mongodb
var client = new MongoClient(uri);
var db; // database
var name_database="stalker1"
var arraValues=[] // this array where we gonna put the document
async function run() {
    try {
        var t=await client.connect();
        db = client.db(name_database);
        console.log("db is ready for the client")
    }catch (error){
        //Ensures that the client will close when you finish/error
        console.log(error)
    }
}
run().catch(console.log)
//// Generate and validate Token

// Insert User
async function InsertClient(client){

    let collection=db.collection("clients") // collection users
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
    await collection.insertOne({
            codeDANON:codeDANON,
            codeCOLA:codeCOLA,
            codeFGD:codeFGD,
            codeNFC:client.codeNFC,
            codeQR:codeQR,
            NFCPhoto:client.NFCPhoto,
            TypeDPV:client.TypeDPV,
            NomPrenom:client.NomPrenom,
            PhoneNumber:client.PhoneNumber,
            PVPhoto:client.PVPhoto
        })
    console.log('Client Inserted by function')

}
router.get('/', function(req,res){
    res.status(200).send(req.body);
});

router.post('/Add',async(req,res)=>{
    let client=req.body;
    await InsertClient(client);
    res.status(200).send("Client Inserted From Ang")

})



module.exports = router;
