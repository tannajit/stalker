var express = require('express');
var app = express();
var router = express.Router();
var mongo = require('mongodb');
var ObjectId = require('mongodb').ObjectId;
const MongoClient = require("mongodb").MongoClient;
//var uri= "mongodb://localhost:27017"; 
var uri = "mongodb+srv://fgd:fgd123@stalkert.fzlt6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // uri to your Mongo database
//var uri="mongodb://localhost:27017"
// uri to your Mongo database
var client = new MongoClient(uri);
var GeoJSON = require('geojson');
var db; // database 
var name_database = "stalker1"
var arraValues = [] // this array where we gonna put the document 
var stream = require('stream');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { param } = require("express/lib/router");
var salt = 5 //any random value,  the salt value specifies how much time it’s gonna take to hash the password. higher the salt value, more secure the password is and more time it will take for calculation.
let multer = require('multer');
let upload = multer();

app.use(upload.array()); 
app.use(express.static('public'));

var type = upload.single('upl');
// MongoDataBase
async function run() {
    try {
        var t = await client.connect();
        db = client.db(name_database);
        console.log("db is ready")
    } catch (error) {
        //Ensures that the client will close when you finish/error
        //console.log(error)
    }
}
run().catch(console.log)

//verfiy token
function verifyToken(req, res, next) {
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

// get new added clients
router.get('/addedClients', async function (req, res) {

    cursor = await db.collection("clients").find({}).toArray();
    if ((db.collection("clients").find({}).count()) === 0) {
        //console.log("No documents found!");
    } else {
        //console.log("promises")
        a = []
        curs = cursor.map(async (elem) => {
            var values;
            //console.log(elem)
            await test1(db, ObjectId(elem.nfc.NFCPhoto)).then(re => {
                elem.NFCP = re
            })
            await test1(db, ObjectId(elem.PVPhoto)).then(re => {
                //console.log("---- zmm3--------")
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
    ////console.log(values)
    //console.log("--- send data -----------")
    res.json(values)

});

router.get('/secteurss', async (req, res) => {
    let collection = await db.collection("geometries") // collection 
    var values = await collection.find({ 'geometry.geometry.type': 'MultiPolygon' }).toArray()
    //console.log("---------  send data -----------")
    res.json(values)

});


router.get('/getAllDeleteRequests', async(req, res) =>{

    let delReq = await db.collection("DeleteRequest") 
    var values = await delReq.aggregate([
    {
        $lookup: {
            from: "geometries",
            localField: "_id",
            foreignField: "_id",
            as: "PDV"
        }
    }]).toArray();

    res.json(values)
})


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
    ////console.log(arrv)
    var sec = await collectiongeom.find({ 'geometry.geometry.type': 'MultiPolygon', 'geometry.properties.idSecteur': { $in: arrv } }).toArray()
    res.json(sec)
})
/* GET clients Based on User */
router.get('/clients', verifyToken, async (req, res) => {
    var userId = req.userId;
    let collectionSec = await db.collection("secteurs") //collection where ids are stored 
    let collectiongeom = await db.collection("geometries")
    var values = await collectionSec.aggregate([
        { $match: { users: ObjectId(userId) } },
        { $project: { points: 1, _id: 0 } }
    ]).toArray();
    //console.log("---------------- values-----------------")
    //console.log(values)
    var arrv = [];
    a = []
    values.forEach(elm => {
        //console.log(elm)
        elm.points.forEach(e => arrv.push(ObjectId(e.point)), err => console.log(err))
    }, err => console.log(err))
    ////console.log(arrv)
    var sec = await collectiongeom.find({ 'geometry.geometry.type': 'Point', '_id': { $in: arrv } }).toArray()
    curs = sec.map(async (elem) => {
        //console.log("----------- element ")
        //console.log(elem)
        if (elem.geometry.properties.NFC) {
            ///data injected by script 
            elem.geometry.properties.status = "green"
        }
        ////console.log(elem)
        if (elem.geometry.properties?.nfc != undefined) {
            var element = elem.geometry.properties;
            //elem.geometry.properties.status="red_white"
            await test1(db, ObjectId(element.nfc.NFCPhoto)).then(re => {
                //console.log("hna 1")
                elem.geometry.properties.NFCP = re
            })

            await test1(db, ObjectId(element.PVPhoto)).then(re => {
                //console.log("hna 2")
                elem.geometry.properties.PVP = re
            })
            //a.add(elem)
        }
        a.push(elem)

    })
    ////console.log(a.length)
    Promise.all(curs).then(ee => {
        ////console.log(a.length)
        res.json(a)
    });

    //res.json(sec)
})

// get client by seller   (Fadma's code)
router.get('/getClientBySeller/:id', async (req, res) => {

    var status = await getClientBySeller(req.params.id)
    res.json(status)


})
/////////// get client by auditor  (Fadma's code)
router.get('/getClientByAuditor/:id', async (req, res) => {

    var status = await getClientByAuditor(req.params.id)
    //console.log("-------------------- ")
    ////console.log(status)
    res.json(status)


})
/////////////////////////////
router.post('/validate', async (req, res) => {
    let id = req.body.id;
    let status = req.body.status
    //console.log(req)
    //console.log(id)
    await validateData(id, status);
    res.status(200).json("client insterted from ANg")

})


async function InsertClient(client) {
    //console.log("/n /n ************************** /n /n")
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
    console.log("PhotoofClient"+client.PVPhoto)
    await test(db, client.NomPrenom, client.PVPhoto).then(s => id_pv = s._id, err => console.log(err))

    await test(db, client.NomPrenom, client.nfc.NFCPhoto).then(s => id_NFC = s._id, err => console.log(err)) //PV photo

    //console.log(id_NFC)
    //console.log(id_pv);
    //console.log("-------------- " + client.lat)
    //console.log(client)
    var id = new ObjectId();
    console.log("=========== id" + id)
    client.nfc.NFCPhoto = id_NFC
    var id = new ObjectId();
    console.log("=========== id" + id)
    var temp_datetime_obj = new Date();
    let clientinfo = {
        idGeometry: id,
        UUid: client.UUid,
        codeDANON: codeDANON,
        codeCOLA: codeCOLA,
        codeFGD: codeFGD,
        codeQR: codeQR,
        lat: client.lat,
        lon: client.lon,
        nfc: client.nfc,
        Code_Secteur_OS: (client.sector != null) ? parseInt(client.sector) : 901010181,
        machine: "CMG",
        TypeDPV: client.TypeDPV,
        detailType: client.detailType,
        userId: client.userId,
        userRole: client.userRole,
        NomPrenom: client.NomPrenom,
        PhoneNumber: client.PhoneNumber,
        PVPhoto: id_pv,
        status: client.Status,
        created_at: temp_datetime_obj,
        updated_at: temp_datetime_obj
    }


    await collection.insertOne(clientinfo)
    ////********* Add in geometries *****************/
    let getInsertedId; //// put Id inserted
    var clientGeo = GeoJSON.parse(clientinfo, { Point: ['lat', 'lon'] }); // convert to GeoJson
    //console.log(clientGeo)
    geometries.insertOne({ _id: id, geometry: clientGeo }).then(result => {
        var id = result.insertedId
        //console.log(id)
        var up = secteurs.updateOne({ "nameSecteur": clientinfo.Code_Secteur_OS, users: ObjectId(clientinfo.userId) },
            { $addToSet: { points: { "point": id, "route": null } } })
        //console.log("$$$$$$$$$$$$$$$$$  created $$$$$$$$$$$$$$$$$$$$$$$$")
        //console.log(up)
    }).catch(error => console.log(error))
    //console.log("inserted POINT :" + getInsertedId)
    ///Insert into Secteurs*/
    //console.log('Client Inserted by function')
}

async function updateClient(client) {

    //console.log("/n /n ******$$$$$$$$$$$$$$$$$$$$$$$$$$******************** /n /n")
    //console.log(client)
    let collection = db.collection("clients") // collection clients
    let geometries = db.collection("geometries") /// geometries Collections
    let secteurs = db.collection("secteurs")
    var id_NFC, id_pv;
    if (client.geometry.properties.NFCP == null) {

        await test(db, client.geometry.properties.NomPrenom, client.geometry.properties.nfc.NFCPhoto).then(s => id_NFC = s._id, err => console.log(err)) //PV photo
        console.log("NFC photo id: " + id_NFC)
    } else {
        id_NFC = ObjectId(client.geometry.properties.nfc.NFCPhoto);

    }
    if (client.geometry.properties.PVP == null) {
        await test(db, client.geometry.properties.NomPrenom, client.geometry.properties.PVPhoto).then(s => id_pv = s._id, err => console.log(err))
        console.log("PV photo id: " + id_pv);
    } else {
        id_pv = ObjectId(client.geometry.properties.PVPhoto);
    }


    console.log(client)
    client.geometry.properties.nfc.NFCPhoto = id_NFC
    var temp_datetime_obj = new Date();
    let clientinfo = {
        idGeometry: ObjectId(client._id),
        codeDANON: client.geometry.properties.codeDANON,
        codeCOLA: client.geometry.properties.codeCOLA,
        codeFGD: client.geometry.properties.codeFGD,
        codeQR: client.geometry.properties.codeQR,
        nfc: client.geometry.properties.nfc,
        Code_Secteur_OS: (client.geometry.properties.Code_Secteur_OS != null) ? parseInt(client.geometry.properties.Code_Secteur_OS) : 93603636360,
        machine: "CMG",
        TypeDPV: client.geometry.properties.TypeDPV,
        detailType: client.geometry.properties.detailType,
        userId: client.geometry.properties.updatedBy,
        userRole: client.geometry.properties.userRole,
        NomPrenom: client.geometry.properties.NomPrenom,
        PhoneNumber: client.geometry.properties.PhoneNumber,
        PVPhoto: id_pv,
        status: client.geometry.properties.status,
        created_at: new Date(client.geometry.properties.created_at),
        updated_at: temp_datetime_obj,
        lat: client.geometry.geometry.coordinates[1],
        lon: client.geometry.geometry.coordinates[0]
    }
    await collection.insertOne(clientinfo).then(async (result) => {
        clientinfo.userId = client.geometry.properties.userId
        clientinfo.updatedBy = client.geometry.properties.updatedBy
        console.log(clientinfo.userId)
        console.log(clientinfo.updatedBy)
        //delete clientinfo.created_at;
        var clientGeo = GeoJSON.parse(clientinfo, { Point: ['lat', 'lon'] }); // convert to GeoJson
        //console.log(clientGeo)
        var updated = await geometries.updateOne({ _id: ObjectId(client._id) },
            { $set: { "geometry": clientGeo } })
        console.log(updated)
        console.log("********** geometrie updated *******")

    })

    //console.log("************* Client updated in geometry *****************");
}


async function validateData(id, status) {

    //console.log("okeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    //console.log(id)
    let geometries = db.collection("geometries") /// geometries Collections

    var updated = await geometries.updateOne({ "_id": ObjectId(id), "geometry.geometry.type": "Point" },
        {
            $set:
            {
                "geometry.properties.status": status,
            }
        })
    //console.log(updated)
    //console.log("********** okeeeeeeeeeeeeeeeee ******")

}

router.post('/AddClient', async (req, res) => {
    let client = req.body;
    //console.log(client)
    await InsertClient(client);
    res.status(200).json("added")

})

router.post('/updateClient', async (req, res) => {
    let client = req.body;
    //console.log(client)
    await updateClient(client);
    res.status(200).json("Client Inserted From Ang")
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

///** Store  Image in Gridfs *****/
async function test(db, filename, data) {
    return putFileSystemItem(db, filename, data)
}

////** Get Image from Gridfs *****/
async function test1(db, id) {
    return await getFileSystemItem(db, id);
}

/************************** Users API ******************* */

//// Generate and validate Token

// Insert User 
async function InsertUser(user) {
    user.password = await GenerateHashPassword(user.password)
    //console.log(user)
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
    //console.log('User inserted/Updated')
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
        //console.log('find')
        var valid = await ValidPassword(user.password, FindUser.password)
        if (valid) {
            let playload = { subject: FindUser._id }
            let token = jwt.sign(playload, 'secretKey')
            status.value = 200
            status.data = { 'token': token, 'user': FindUser }
        } else {
            status.value = 401
            status.data = "invalid password"
            //console.log("invalid password")
        }
    } else {
        status.value = 401
        status.data = "invalid User"
        //console.log("invalid User")
    }
    return status;
}

async function getClientBySeller(id) {
    //console.log(lat)
    console.log(id)
    let clientCollection = db.collection("clients")
    var client = await clientCollection.find(
        {
            'userRole': "Seller",
            'idGeometry': ObjectId(id),
            'updated_at': { $exists: true }
        }
    ).sort({ 'updated_at': -1 }).limit(1).toArray()
    var status = { clientOf: "seller", data: null }
    var cli = [];
    if (client.length != 0) {
        //console.log("############### Seller ##########")
        //console.log(client)
        status.data = { 'client': client }
        ///***  */
        ////console.log(client)
        cli = client[0]
        await test1(db, ObjectId(cli.PVPhoto)).then(re => {
            //console.log("---- zmm3 selllerrrrr  --------")
            cli.PVP = re
        })
        status.data = { 'client': cli }

        ////console.log(status)
    }
    //console.log("############# selleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer ########")
    //console.log(cli)
    return cli;
}

async function getClientByAuditor(id) {
    console.log("auditor")
    let clientCollection = db.collection("clients")
    var client = await clientCollection.find(
        {
            'idGeometry': ObjectId(id),
            'userRole': 'Auditor',
            'updated_at': { $exists: true }

        }
    ).sort({ 'updated_at': -1 }).limit(1).toArray()
    var status = { clientOf: "auditor", data: null }
    if (client.length != 0) {
        //console.log("############### Auditor ##########")
        //console.log(client)
        cli = client[0]
        await test1(db, ObjectId(cli.nfc.NFCPhoto)).then(re => {
            cli.NFCP = re
        })
        await test1(db, ObjectId(cli.PVPhoto)).then(re => {
            //console.log("---- zmm3 auditor --------")
            cli.PVP = re
        })

        status.data = { 'client': cli }
        ////console.log(status)
    } else {
        //console.log("not found")
        al = [];
        return al;
    }
    //console.log("############# auditoooooooooooooooooooooooooooooooooor ########")
    //console.log(cli)
    return cli;
}
/* GET users listing. */
//   router.get('/', async function(req, res) {
//     res.json("hey");
//   });

router.post('/login', async (req, res) => {

    //console.log(JSON.stringify(req.headers));
    let user = req.body;
    //console.log(user)
    var status = await getUser(user)
    res.status(status.value).send({ 'Data': status.data })
})

router.post('/register', async (req, res) => {
    let user = req.body;
    await InsertUser(user);
    res.status(200).send("User inserted/Updated")
})

router.get('/client', async (req, res) => {
    //console.log("client info")
})

async function ValidPassword(passwordG, passwordD) {
    var result = await bcrypt.compare(passwordG, passwordD)
    return (result);
}
///////// *************** Settings *************** ///////

router.post("/settings", async (req, res) => {
    //console.log("**************set settings in the dataBase******************")
    var time = req.body.time;
    //console.log(time)
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
    //console.log("***********get settings**************")
    let collection = await db.collection("settings") // collection 
    var values = await collection.find({ "proprety": 'sms' }).toArray()
    //console.log(values[0])
    res.json(values[0])
})
//////////***********************************////////////////////////

router.get("/GetClient/:id", async (req, res) => {
    console.log("get client")
    let geometries = await db.collection("geometries")
    //console.log("_id"+new ObjectId(req.params.id))
    const client = await geometries.findOne({ _id: new ObjectId(req.params.id) });
    //console.log(client);
    res.status(200).send(client);
})

router.post("/DeleteRequest", async (req, res) => {
    console.log("get client : ")
    //dataclient=req.body.data
    console.log(req.body.video)

    client={}
    var id_Photo;
    var id_Video;

     DeleteRequest = await db.collection("DeleteRequest")

     

    //resp = await DeleteRequest.insertOne(client);

    // if(req.body.Photo._imageAsDataUrl!=null){
    //     photo=req.body.Photo._imageAsDataUrl
    //     await test(db,dataclient._id,photo).then(res=>id_Photo=res._id,err=>console.log(err))
    // }
  
    // if(req.body.video!=null){
    //     await test(db,"video2",req.body.video).then(res=>{id_Video=res._id;console.log(res)},err=>console.log(err))
    // }


    // client["_id"]= ObjectId(dataclient._id);
    // client["NomPrenom"]=dataclient.geometry.properties.NomPrenom;
    // client["Code_Secteur_OS"]=dataclient.geometry.properties.Code_Secteur_OS;
    // client["Video"]="id_Video";
    // client["Raison"]=req.body.raison;
    // client["Photo"]=id_Photo;
    // client["Coordinates"]=dataclient.geometry.geometry.coordinates;


     // await DeleteRequest.insertOne(client); 

}
)

router.post("/ReadVideo", async (req, res) => {


    console.log("wiliwlwi ");
    console.log(req.body);

    res.json("fef")
}
)
//////////////////******* Extract data (Hafsa's Code) ***********/////////////////////
router.get("/extract", async (req, res) => {
    let geometries = await db.collection("geometries")
    let values = await geometries.aggregate([
        {
            $match: {
                $and: [{ "geometry.geometry.type": "Point" }

                ]
            }
        },
        {
            $lookup: {
                from: "clients",
                localField: "_id",
                foreignField: "idGeometry",
                as: "info"
            }
        }

    ]).toArray();
    all1 = []

    var test = values.map((elem) => {
        //console.log("----")
        //console.log(elem)
        //all1=[];
        //console.log("$$$")
        elem.info.reverse();
        audit = false;
        seller = false;
        all = elem.info.filter((ele) => {
            if (ele.userRole == "Auditor" && !audit) {
                //console.log("auditor")
                audit = true;
                return ele;
            } else if (ele.userRole == "Seller" && !seller) {
                //console.log("seller")
                seller = true
                return ele;
            }
        })
        // console.log(all)
        elem.info = all
        return elem;

    });

    DataAll = []
    //console.log(test)
    test.forEach(element => {
        //console.log("element")
        //console.log(element)
        Data = {
            "Identifiant system": element._id,
            "X": element.geometry.geometry.coordinates[1],
            "Y": element.geometry.geometry.coordinates[0],
            "Date_Creation": element.geometry.properties.created_at,
            "NFC_ID": (element.geometry.properties.NFC != null) ? element.geometry.properties.NFC : element.geometry.properties.nfc.Numero_Serie,
            "NFC_UUID": (element.geometry.properties.NFC != null) ? element.geometry.properties.NFC : element.geometry.properties.nfc.UUID,
            "Code_Secteur_OS": element.geometry.properties.Code_Secteur_OS,
            "machine": (element.geometry.properties.machine != null) ? element.geometry.properties.machine : "",
            "TypeDPV": (element.geometry.properties.TypeDPV != null) ? element.geometry.properties.TypeDPV : "",
            "NomPrenom": (element.geometry.properties.NomPrenom != null) ? element.geometry.properties.NomPrenom : element.geometry.properties.Nom_Client,
            "PhoneNumber": (element.geometry.properties.PhoneNumber != null) ? element.geometry.properties.PhoneNumber : element.geometry.properties.Telephone_Client,
            "Passage_Auditeur": "NO",
            "Auditeur_ID": "",
            "Date_Reception_Auditor": "",
            "Nom_Auditeur": "",
            "TypeAuditeur": "",
            "Phone_Auditeur": "",
            "Valid_Auditeur": "",
            "Passage_Vendeur": "NO",
            "SalesPerson_ID": "",
            "Date_Reception_Vondeur": "",
            "Nom_Vendeur": "",
            "Type_Vendeur": "",
            "Phone_Vendeur": "",
            "Photo_Vendeur": "",
            "Valid_Vondeur": ""
        }

        element.info.forEach(info => {
            if (info.userRole === "Auditor") {
                Data.Passage_Auditeur = "YES"
                Data.Auditeur_ID = info.userId
                Data.Nom_Auditeur = info.NomPrenom
                Data.Date_Reception_Auditor = info.created_at
                Data.TypeAuditeur = Data.TypeDPV
                Data.Phone_Auditeur = info.PhoneNumber
                if (element.geometry.properties.status == "green") {
                    Data.Valid_Auditeur = "YES"
                } else {
                    Data.Valid_Auditeur = "NO"
                }

            } else if (info.userRole === "Seller") {
                Data.Passage_Vendeur = "YES"
                Data.SalesPerson_ID = info.userId
                Data.Date_Reception_Vondeur = info.created_at
                Data.Nom_Vendeur = info.NomPrenom
                Data.Type_Vendeur = info.TypeDPV
                Data.Phone_Vendeur = info.PhoneNumber
                if (element.geometry.properties.status == "black") {
                    Data.Valid_Vondeur = "NO"
                } else {
                    Data.Valid_Vondeur = "YES"
                }
            }
        })
        DataAll.push(Data)
    })


    res.json(DataAll);
});

//////////////**********************/////////////////////

module.exports = router;