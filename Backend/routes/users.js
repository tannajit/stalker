var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const jwt=require("jsonwebtoken")
var salt=5 //any random value,  the salt value specifies how much time it’s gonna take to hash the password. higher the salt value, more secure the password is and more time it will take for calculation.

// MongoDataBase
const MongoClient = require("mongodb").MongoClient;
//var uri= "mongodb://192.168.2.230:27017"; // uri to your Mongo database if the server is available
var uri="mongodb://localhost:27017"  // use your local Mongodb
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
//// Generate and validate Token
function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split('Bearer')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

// Insert User 
async function InsertUser(user){
    user.password=await GenerateHashPassword(user.password)
    console.log(user)
    let collection=db.collection("users") // collection users 
    await collection.update({name:user.name},{$setOnInsert:{
                      phone:user.phone,
                      CIN:user.CIN,
                      role:user.role,
                      email:user.email,
                      password:user.password    
        } },{upsert:true})
    console.log('User inserted/Updated')
    
}
/// Generate Password
async function GenerateHashPassword(password){
  let salt_value = await bcrypt.genSalt(salt);
  var encrypted_password = await bcrypt.hash(password, salt_value);
  return encrypted_password;
}
/// get User from database 
async function getUser(user){
  var FindUser;
  let collection= db.collection("users")
  var status={value:401,data:null}
  var FindUser= await collection.findOne({name:user.name})
  if(FindUser!=null){
    console.log('find')
    var valid=await ValidPassword(user.password,FindUser.password)
    if(valid){
      let playload={subject: user._id}
      let token=jwt.sign(playload,'secretKey')
      status.value=200
      status.data=token
      //console.log(token)
    }else{
      status.value=401
      status.data="invalid password"
      console.log("invalid password")
    }
  }else{
      status.value=401
      status.data="invalid User"
      console.log("invalid User")
  }
  return status;

}


/* GET users listing. */
router.get('/', async function(req, res) {
  res.json("hey");
});


router.post('/login',async(req,res)=>{
  let user=req.body;
  console.log(user)
  var status=await getUser(user)
  res.status(status.value).send({'Data':status.data})
})

router.post('/register',async(req,res)=>{
  let user=req.body;
  await InsertUser(user);
  res.status(200).send("User inserted/Updated")

})


async function ValidPassword(passwordG,passwordD){
    var result= await bcrypt.compare(passwordG,passwordD)
     return(result);
   
}
/*   var validPassword = await bcrypt.compare("Hafsa123",enc_password);
     console.log(validPassword)
  */

module.exports = router;
