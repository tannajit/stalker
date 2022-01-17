const MongoClient = require('mongodb').MongoClient;
//var url = "mongodb+srv://fgd:fgd123@stalkert.fzlt6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// var url = "mongodb://localhost:27017";
var url= "mongodb+srv://fgd:fgd123@stalkert.fzlt6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // uri to your Mongo database
var client = new MongoClient(url);
var name_database = "stalker1"
var ObjectId = require('mongodb').ObjectID;
const bcrypt = require('bcrypt')
var salt=5
var db;
// users
var user1 = {"name" : "TAOUFIQ Hafsa", "CIN" : "KKKKK", "email" : "h.taoufiq@fgddistrib.com", "password":"Hafsa123","phone" : "0680846529", "role" : "vendor" };
var user2 = {"name" : "ENNAJI Fadma", "CIN" : "JT78695", "email" : "f.ennaji@fgddistrib.com", "password":"Fadma123","phone" : "0680846529", "role" : "Admin" };
var user3 = {"name" : "Mellah Khaoula", "CIN" : "JT78695", "email" : "k.mellah@fgddistrib.com", "password":"Khaoula123","phone" : "0680846529", "role" : "Seller" };
var user4 = {"name" : "Ouaziz Hajar", "CIN" : "JT78695", "email" : "h.ouaziz@fgddistrib.com", "password":"Hajar123","phone" : "0680846529", "role" : "Seller" };
var user5 = {"name" : "Hagui Meryem", "CIN" : "JT78695", "email" : "m.hagui@fgddistrib.com", "password":"Meryem123","phone" : "0680846529", "role" : "Seller" };
var user6 = {"name" : "Bendhi Jamila", "CIN" : "JT78695", "email" : "j.bendhi@fgddistrib.com", "password":"Jamila123","phone" : "0680846529", "role" : "Back Office" };
var user7 = {"name" : "Donji Hanane", "CIN" : "JT78695", "email" : "h.donji@fgddistrib.com", "password":"Hanane123","phone" : "0680846529", "role" : "Back Office" };
var user8 = {"name" : "Ialioune Nezha", "CIN" : "JT78695", "email" : "i.nezha@fgddistrib.com", "password":"Nezha123","phone" : "0680846529", "role" : "Back Office" };
var user9 = {"name" : "Said Outajer", "CIN" : "JT78695", "email" : "s.outajer@fgddistrib.com", "password":"Said123","phone" : "0680846529", "role" : "Auditor" };
var user10 = {"name" : "Abbes Elahrami", "CIN" : "JT78695", "email" : "a.elahrami@fgddistrib.com", "password":"Abbes123","phone" : "0680846529", "role" : "Auditor" };


run().catch(console.log)





async function run() {
	try {
		var t=await client.connect();
		db = client.db(name_database);
		console.log("db is ready")
    InsertAdmin(user2).catch(console.log)
    InsertUser(user1,901010181).catch(console.log)
    InsertUser(user3,901010882).catch(console.log)
    InsertUser(user4,901011082).catch(console.log)
    InsertUser(user5,901011082).catch(console.log)
    InsertUser(user5,93603636360).catch(console.log)
    InsertUser(user6,901011082).catch(console.log)
    InsertUser(user7,901011483).catch(console.log)
    InsertUser(user8,902020481).catch(console.log)
    InsertUser(user9,902020481).catch(console.log)
    InsertUser(user10,902020481).catch(console.log)
	}catch (error){
	//Ensures that the client will close when you finish/error
		console.log(error)
	}
}
// Insert User 
async function InsertUser(user,secName){
  user.password=await GenerateHashPassword(user.password)
  console.log(user)
  let id ;
  let collection=db.collection("users") // collection users 
  await collection.insertOne({name:user.name,
                    phone:user.phone,
                    CIN:user.CIN,
                    role:user.role,
                    email:user.email,
                    password:user.password}).then(result => {
                      id = result.insertedId;
                      console.log("|********** User Inserted *********| id= "+result.insertedId);
                      updateSector(result.insertedId,secName);
                       
                    })
                      .catch(err => {
                    
                    }); 
}
/// Generate Password
async function GenerateHashPassword(password){
let salt_value = await bcrypt.genSalt(salt);
var encrypted_password = await bcrypt.hash(password, salt_value);
return encrypted_password;
}

async function updateSector(id,sec_name){

  console.log("|*********** User affected to sector: "+sec_name+" **********************|")
  let collection=db.collection("secteurs");
  await collection.updateOne({
    nameSecteur: sec_name
  },
  {
    $addToSet: {"users": id}
  });

  
}

async function InsertAdmin(user){
  user.password=await GenerateHashPassword(user.password)
  console.log(user)

  let collection=db.collection("users") // collection users 
  await collection.insertOne({name:user.name,
                    phone:user.phone,
                    CIN:user.CIN,
                    role:user.role,
                    email:user.email,
                    password:user.password}).then(result => {
                      
                      console.log("|********** Admin Inserted *********| id= "+result.insertedId);

                      // update sectors
                      updateSectorForAdmin(result.insertedId)
                      
                       
                    })
                      .catch(err => {
                    
                    }); 
}

async function updateSectorForAdmin(userId){

  console.log("|*********** Admin affected to all sectors **********************|")
  let collection1=db.collection("secteurs");
  await collection1.updateMany({},
  {
    $addToSet: {"users": userId}
  });
}