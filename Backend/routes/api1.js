//const { json } = require('express');
var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var ObjectId = require('mongodb').ObjectId;
const MongoClient = require("mongodb").MongoClient;
//var uri= "mongodb://192.168.2.230:27017"; 
//var uri= "mongodb+srv://fgd:fgd123@stalkert.fzlt6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // uri to your Mongo database
var uri="mongodb://localhost:27017"
// uri to your Mongo database
var client = new MongoClient(uri);
var GeoJSON = require('geojson');
var db; // database 
var name_database = "stalker1"
var arraValues = [] // this array where we gonna put the document 
var stream = require('stream');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
var salt = 5 //any random value,  the salt value specifies how much time it’s gonna take to hash the password. higher the salt value, more secure the password is and more time it will take for calculation.
// MongoDataBase

async function run() {
    try {
        var t = await client.connect();
        db = client.db(name_database);
        console.log("db is ready")
    } catch (error) {
        //Ensures that the client will close when you finish/error
        console.log(error)
    }
}

run().catch(console.log)

//verfiy token
function verifyToken(req, res, next) {
    //console.log(req)
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split('bearer ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

function put(value) {
    arraValues.push(value)
}

async function getData() {
    var arrValues = []
    let collection = db.collection("geometries") // collection 
    let values = collection.find({ 'geometry.geometry.type': 'Point' })
    values.forEach(value => { arrValues.push(value) }, error => console.log(error))
    console.log(arrValues)
    return arrValues;
    //console.log(arraValues)
    //return values; 
}

async function test1(db, id) {
    return await getFileSystemItem(db, id);
}
// get new added clients
router.get('/addedClients', async function (req, res) {

    cursor = await db.collection("clients").find({}).toArray();
    if ((db.collection("clients").find({}).count()) === 0) {
        console.log("No documents found!");
    } else {
        console.log("promises")
        a = []
        curs = cursor.map(async (elem) => {
            var values;
            console.log(elem)
            await test1(db,ObjectId(elem.nfc.NFCPhoto)).then(re => {
                elem.NFCP = re
            })
            await test1(db,ObjectId(elem.PVPhoto)).then(re => {
                console.log("---- zmm3--------")
                elem.PVP = re
            })
            a.push(elem)
        })
        Promise.all(curs).then(ee => res.json(a));
    }

});
/* GET . */
router.get('/clientss', async (req, res) => {

    let collection = await db.collection("geometries") // collection 
    var values = await collection.find({ 'geometry.geometry.type': 'Point' }).toArray()
    //console.log(values)
    console.log("--- send data -----------")
    res.json(values)

});

router.get('/secteurss', async (req, res) => {
    let collection = await db.collection("geometries") // collection 
    var values = await collection.find({ 'geometry.geometry.type': 'MultiPolygon' }).toArray()
    console.log("---------  send data -----------")
    res.json(values)

});


/* GET Sectors Based on User */
router.get('/secteurs', verifyToken, async (req, res) => {
    var userId = req.userId;
    let collectionSec = await db.collection("secteurs") // collection where ids are stored  
    let collectiongeom = await db.collection("geometries") // collection where details are stored 
    var values = await collectionSec.aggregate([
        { $match: { users: ObjectId(userId) } },
        { $project: { nameSecteur: 1, _id: 0 } }
    ]).toArray();
    var arrv = [];
    values.forEach(elm => arrv.push(elm.nameSecteur), err => console.log(err))

    //console.log(arrv)
    var sec = await collectiongeom.find({ 'geometry.geometry.type': 'MultiPolygon', 'geometry.properties.idSecteur': { $in: arrv } }).toArray()
    res.json(sec)
})
/* GET clients Based on User */
router.get('/clients', verifyToken, async (req, res) => {
    var userId = req.userId;
    //console.log("hhh")
    let collectionSec = await db.collection("secteurs") //collection where ids are stored 
    let collectiongeom = await db.collection("geometries")
    var values = await collectionSec.aggregate([
        { $match: { users: ObjectId(userId) } },
        { $project: { points: 1, _id: 0 } }
    ]).toArray();
    var arrv = [];
    a = []
    values.forEach(elm => {
        elm.points.forEach(e => arrv.push(ObjectId(e.point)), err => console.log(err))
    }, err => console.log(err))
    //console.log(arrv)
    var sec = await collectiongeom.find({ 'geometry.geometry.type': 'Point', '_id': { $in: arrv } }).toArray()
    curs = sec.map(async (elem) => {
        if(elem.geometry.properties.NFC){
            ///data injected by script 
            elem.geometry.properties.status="green"
        }
        console.log(elem)
        if(elem.geometry.properties?.nfc!=undefined){
            var element=elem.geometry.properties;
            //elem.geometry.properties.status="red_white"
        await test1(db,ObjectId(element.nfc.NFCPhoto)).then(re => {
            console.log("hna 1")
            elem.geometry.properties.NFCP = re
        })
        
        await test1(db,ObjectId(element.PVPhoto)).then(re => {
            console.log("hna 2")
            elem.geometry.properties.PVP = re
        })
        //a.add(elem)
    }
    a.push(elem)
    
    })
    //console.log(a.length)
    Promise.all(curs).then(ee => {
        //console.log(a.length)
        res.json(a)});

    //res.json(sec)
})

// get client by seller 
router.get('/getClientBySeller/:lat/:long', async(req,res) => {

    var status = await getClientBySeller(req.params.lat,req.params.long)
    res.json(status)
    
    
})

router.get('/getClientByAuditor/:lat/:long', async(req,res) => {

    var status = await getClientByAuditor(req.params.lat,req.params.long)
    console.log("-------------------- ")
    console.log(status)
    res.json(status)
    
    
})



async function InsertClient(client) {
    console.log("/n /n ************************** /n /n")
    let collection = db.collection("clients") // collection clients
    let geometries = db.collection("geometries") /// geometries Collections
    let secteurs = db.collection("secteurs")
    let codeDANON, codeCOLA, codeFGD, codeQR
    client.codes.forEach(v => {
        if (v.nbr === 1) codeDANON = v.value
        if (v.nbr === 2) codeCOLA = v.value
        if (v.nbr === 3) codeFGD = v.value
        if (v.nbr === 4) codeQR = v.value
    })
    var id_pv, id_NFC;
    await test(db, client.NomPrenom, client.PVPhoto).then(s => id_pv = s._id, err => console.log(err))
    await test(db, client.NomPrenom, client.NFCPhoto).then(s => id_NFC = s._id, err => console.log(err)) //PV photo
    console.log(id_NFC)
    console.log(id_pv);
    console.log("-------------- " + client.lat)
    let clientinfo = {
        codeDANON: codeDANON,
        codeCOLA: codeCOLA,
        codeFGD: codeFGD,
        codeQR: codeQR,
        lat: client.lat,
        lon: client.lon,
        nfc: {
            NFCPhoto: id_NFC,
            codeNFC: client.codeNFC,
            technologies: "NDEF",
            UUID: "2I27KB278LJH2OIYOIY2H2"
        },
        Code_Secteur_OS: (client.sector!=null)? parseInt(client.sector) : 901011082 ,
        machine: "CMG",
        TypeDPV: client.TypeDPV,
        detailType: client.detailType,
        userId: client.userId,
        userRole: client.userRole,
        NomPrenom: client.NomPrenom,
        PhoneNumber: client.PhoneNumber,
        PVPhoto: id_pv,
        status: client.Status,
        created_at: client.created_at
    }
    await collection.insertOne(clientinfo)
    ////********* Add in geometries *****************/
    let getInsertedId; //// put Id inserted
    var clientGeo = GeoJSON.parse(clientinfo, { Point: ['lat', 'lon'] }); // convert to GeoJson
    console.log(clientGeo)
    geometries.insertOne({ geometry: clientGeo }).then(result => {
        var id = result.insertedId
        console.log(id)
        var up = secteurs.updateOne({ "nameSecteur": clientinfo.Code_Secteur_OS, users: ObjectId(clientinfo.userId) },
            { $addToSet: { points: { "point": id, "route": null } } })
        console.log(up)
    }).catch(error => console.log(error))
    console.log("inserted POINT :" + getInsertedId)
    ///Insert into Secteurs
    console.log('Client Inserted by function')
}

async function updateClient(client){

    console.log("/n /n ************************** /n /n")
    let collection = db.collection("clients") // collection clients
    let geometries = db.collection("geometries") /// geometries Collections
    let secteurs = db.collection("secteurs")
    var id_NFC,id_pv;
    if(client.properties.NFCP==null){
        
        await test(db, client.properties.NomPrenom, client.properties.nfc.NFCPhoto).then(s => id_NFC = s._id, err => console.log(err)) //PV photo
        console.log(id_NFC)
    }else{
        id_NFC = client.properties.nfc.NFCPhoto;
    }
    if(client.properties.PVP==null){
        
        await test(db, client.properties.NomPrenom, client.properties.PVPhoto).then(s => id_pv = s._id, err => console.log(err))
        console.log(id_pv);
    }else{
        id_pv = client.properties.PVPhoto;
    }
    
    
    console.log("-------------- " + client.lat)

    let clientinfo = {
        codeDANON: client.properties.codeDANON,
        codeCOLA: client.properties.codeCOLA,
        codeFGD: client.properties.codeFGD,
        codeQR: client.properties.codeQR,
        lat: client.lat,
        lon: client.lon,
        nfc: {
            NFCPhoto: id_NFC,
            codeNFC: client.properties.nfc.codeNFC,
            technologies: "NDEF",
            UUID: "2I27KB278LJH2OIYOIY2H2"
        },
        Code_Secteur_OS: 93603636360,
        machine: "CMG",
        TypeDPV: client.properties.TypeDPV,
        detailType: client.properties.detailType,
        userId: client.properties.userId,
        updatedBy: client.properties.updatedBy,
        userRole: client.properties.userRole,
        NomPrenom: client.properties.NomPrenom,
        PhoneNumber: client.properties.PhoneNumber,
        PVPhoto: id_pv,
        status: client.properties.status,
        updated_at: client.properties.updated_at,
        lat: client.geometry.coordinates[1],
        lon: client.geometry.coordinates[0]
    }
    await collection.insertOne(clientinfo).then(async (result)=> {
        var clientGeo = GeoJSON.parse(clientinfo, { Point: ['lat', 'lon'] }); // convert to GeoJson
        console.log(clientGeo)
        var updated=await geometries.updateOne({"geometry.geometry.coordinates":clientinfo.lon},
        { $set: {"geometry.properties": clientGeo.properties} })
        console.log(updated)
        console.log("********** geometrie updated ******")
    })

    console.log("************* Client inserted in client *****************");

    
    
    
    
}


// router.get('/', async function(req,res){

//    cursor = await db.collection("clients").find({}).toArray();
//   if ((db.collection("clients").find({}).count()) === 0) {

//     console.log("No documents found!");

//   }
//   console.log(cursor)

//   res.json(cursor)


// });

router.post('/AddClient', async (req, res) => {
    let client = req.body;
    console.log(client)
    await InsertClient(client);
    res.status(200).json("added")

})

router.post('/updateClient', async(req,res) =>{
    let client = req.body;
    console.log(client)
    await updateClient(client);
    res.status(200).send("Client Inserted From Ang")
})
/// gridFS script 
function getFileSystemItem(dbo, id) {
    var buf = Buffer('');
    return new Promise(function (resolve, reject) {
        var bucket = new mongo.GridFSBucket(dbo);
        var readstream = bucket.openDownloadStream(id);
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
    var putItemHelper = function (bucket, resolve, reject) {
        var writeStream = bucket.openUploadStream(filename);
        var s = new stream.Readable();
        s.push(data);
        s.push(null); // Push null to end stream
        s.pipe(writeStream);
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    };
    return new Promise(function (resolve, reject) {
        var bucket = new mongo.GridFSBucket(dbo);
        bucket.find({ filename: filename }).count(function (err, count) {
            if (err) return reject(err);
            if (count > 0) {
                bucket.delete(filename, function () {
                    putItemHelper(bucket, resolve, reject);
                }, reject)
            } else {
                putItemHelper(bucket, resolve, reject);
            }
        }, reject);
    });
}

async function test(db, filename, data) {
    return putFileSystemItem(db, filename, data)
}

/************************** Users API ******************* */

//// Generate and validate Token

// Insert User 
async function InsertUser(user) {
    user.password = await GenerateHashPassword(user.password)
    console.log(user)
    let collection = db.collection("users") // collection users 
    await collection.update({ name: user.name }, {
        $setOnInsert: {
            phone: user.phone,
            CIN: user.CIN,
            role: user.role,
            email: user.email,
            password: user.password
        }
    }, { upsert: true })
    console.log('User inserted/Updated')
}
/// Generate Password
async function GenerateHashPassword(password) {
    let salt_value = await bcrypt.genSalt(salt);
    var encrypted_password = await bcrypt.hash(password, salt_value);
    return encrypted_password;
}
/// get User from database 
async function getUser(user) {
    var FindUser;
    let collection = db.collection("users")
    var status = { value: 401, data: null }
    var FindUser = await collection.findOne({ email: user.email })
    if (FindUser != null) {
        console.log('find')
        var valid = await ValidPassword(user.password, FindUser.password)
        if (valid) {
            let playload = { subject: FindUser._id }
            let token = jwt.sign(playload, 'secretKey')
            status.value = 200
            status.data = { 'token': token, 'user': FindUser }
        } else {
            status.value = 401
            status.data = "invalid password"
            console.log("invalid password")
        }
    } else {
        status.value = 401
        status.data = "invalid User"
        console.log("invalid User")
    }
    return status;
}

async function getClientBySeller(lat,long){
    console.log(lat)
    // console.log(long)
    let clientCollection = db.collection("clients")
    var client = await clientCollection.find(
        {
            'userRole':"Seller",
            'lat':parseFloat(lat),
            'lon':parseFloat(long),
            'updated_at':{$exists: true}
        }
    ).sort({'updated_at':-1}).limit(1).toArray()
    var status = { clientOf: "seller", data: null }
    if (client.length!=0) {
        console.log("############### Seller ##########")
        console.log(client)
        status.data = {'client': client}
        ///***  */
        //console.log(client)
        cli=client[0]
        await test1(db,ObjectId(cli.nfc.NFCPhoto)).then(re => {
            cli.NFCP = re
        })
        await test1(db,ObjectId(cli.PVPhoto)).then(re => {
            console.log("---- zmm3 selllerrrrr  --------")
            cli.PVP = re
        })
        status.data = {'client': cli}

        //console.log(status)
    }
    console.log("############# selleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer ########")
    console.log(cli)
    return cli;
}

async function getClientByAuditor(lat,long){

    let clientCollection = db.collection("clients")
    var client = await clientCollection.find(
        {
            'lat':parseFloat(lat),
            'lon':parseFloat(long),
            'userRole':'Auditor',
            'updated_at':{$exists: true}
            
        }
    ).sort({'updated_at':-1}).limit(1).toArray()
    var status = { clientOf: "auditor", data: null }
    if (client.length!=0) {
        console.log("############### Auditor ##########")
        console.log(client)
        cli=client[0]
        await test1(db,ObjectId(cli.nfc.NFCPhoto)).then(re => {
            cli.NFCP = re
        })
        await test1(db,ObjectId(cli.PVPhoto)).then(re => {
            console.log("---- zmm3 auditor --------")
            cli.PVP = re
        })

        status.data = {'client': cli}
        //console.log(status)
    }else{
        console.log("not found")
        al=[];
        return al;
    }
    console.log("############# auditoooooooooooooooooooooooooooooooooor ########")
    console.log(cli)
    return cli;
}
/* GET users listing. */
//   router.get('/', async function(req, res) {
//     res.json("hey");
//   });

router.post('/login', async (req, res) => {

    console.log(JSON.stringify(req.headers));
    let user = req.body;
    console.log(user)
    var status = await getUser(user)
    res.status(status.value).send({ 'Data': status.data })
})

router.post('/register', async (req, res) => {
    let user = req.body;
    await InsertUser(user);
    res.status(200).send("User inserted/Updated")
})

router.get('/client', async (req, res) => {
    console.log("client info")
})

async function ValidPassword(passwordG, passwordD) {
    var result = await bcrypt.compare(passwordG, passwordD)
    return (result);
}

///////// *************** Settings *************** ///////

router.post("/settings", async (req, res) => {
    console.log("**************set settings in the dataBase******************")
    var time = req.body.time;
    console.log(time)
    let collection = await db.collection("settings") // collection users 
    await collection.updateOne({ "proprety": "sms" },
        {
            $set: {
                "details.time": time,
                "details.code_length": 4
            }
        }, { upsert: true })

    res.status(200).json("SMS time set successfully")

});
router.get("/settings", async (req, res) => {
    console.log("***********get settings**************")
    let collection = await db.collection("settings") // collection 
    var values = await collection.find({ "proprety": 'sms' }).toArray()
    console.log(values[0])
    res.json(values[0])
})
//////////***********************************////////////////////////

module.exports = router;
