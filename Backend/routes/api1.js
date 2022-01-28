var express = require('express');
var app = express();
var router = express.Router();
var mongo = require('mongodb');
var multer = require('multer');
var path = require('path');
var ObjectId = require('mongodb').ObjectId;
const MongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017";
//var uri = "mongodb+srv://fgd:fgd123@stalkert.fzlt6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // uri to your Mongo database
//var uri = "mongodb+srv://m001-student:m001-mongodb-basics@cluster0.tzaxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // uri to your Mongo database
// uri to your Mongo database
var client = new MongoClient(uri);
var GeoJSON = require('geojson');
var db; // database 
var name_database = "stalker3"
var arraValues = []
var stream = require('stream');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { param } = require("express/lib/router");
const controller = require("./controller");
const fs = require("fs");
const baseUrl = "uploads/";
//// fetch 
const fetch = require("node-fetch")

var salt = 5 //any random value,  the salt value specifies how much time it’s gonna take to hash the password. higher the salt value, more secure the password is and more time it will take for calculation.
// MongoDataBase
async function run() {
    try {
        var t = await client.connect();
        db = client.db(name_database);
        console.log("db is ready")
    } catch (error) {
        //console.log(error)
    }
}
run().catch(console.log)

//////************** */
router.post("/upload", controller.upload);

router.get("/files", async function (req, res) {
    const collection = await db.collection('geometries');
    const directoryPath = "uploads/";
    const colection1 = await db.collection('backup');
    const colection2 = await db.collection('secteurs');
    collection.find({}).forEach(async (doc) => {
        await colection1.insertOne(doc.geometry);
    });
    colection2.find({}).forEach(async (doc) => {
        doc.points = [];
        await colection2.updateOne({ nameSecteur: doc.nameSecteur }, { $set: doc });
    });
    fs.readdir(directoryPath, async (err, files) => {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
            });
        }
        let fileInfos = [];
        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });
        res.status(200).send(fileInfos);
        fileInfos.forEach(element => {
            PutDataGeometries(collection, element.url)
        });
        var arr = await collection.find({ 'geometry.geometry.type': 'Point' }).toArray()
        InjectSecteurData(arr)
        await collection.updateMany({ "geometry.geometry.type": "Point", "geometry.properties.NFC": { $exists: true } }, { $set: { "geometry.properties.nfc": { UUID: null, Numero_Serie: null, Technologies: null, Type_card: null, NFCPhoto: null } } }).then().catch(error => console.log(error))
        await collection.updateMany({ "geometry.geometry.type": "Point", "geometry.properties.NFC": { $exists: true } }, { $rename: { "geometry.properties.NFC": "geometry.properties.nfc.UUID" } }).then().catch(error => console.log(error))
        console.log("//************start updating Status************//")
        await collection.updateMany({ "geometry.geometry.type": "Point", "geometry.properties.nfc.UUID": { $ne: null } }, { $set: { "geometry.properties.status": "purple" } }).then().catch(error => console.log(error))
        await collection.updateMany({ "geometry.geometry.type": "Point", "geometry.properties.nfc.UUID": { $eq: null } }, { $set: { "geometry.properties.status": "red" } }).then().catch(error => console.log(error))
    });
});

router.get("/deletefile", function (req, res) {
    const directory = "uploads/";

    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
            });
        }
    });
})

router.get("/files/:name", controller.download);
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
    } else {
        a = []
        curs = cursor.map(async (elem) => {
            var values;
            if (elem.nfc.NFCPhoto != null) {
                await test1(db, ObjectId(elem.nfc.NFCPhoto)).then(re => {
                    elem.NFCP = re
                }).catch(err => console.log(err))
            }
            if (elem.PVPhoto != null) {
                await test1(db, ObjectId(elem.PVPhoto)).then(re => {
                    elem.PVP = re
                }).catch(err => console.log(err))
            }
            a.push(elem)
        })

        Promise.all(curs).then(ee => res.json(a)).catch(err => {
            console.log(error)
        });
    }
});

/* GET . */

router.get('/getAllUsers', async (req, res) => {
    list = []
    let usersColl = await db.collection("users")
    var values = await usersColl.aggregate([
        {
            $lookup: {
                from: "secteurs",
                localField: "_id",
                foreignField: "users",
                as: "sectors"
            }
        }]).toArray();
    // let userColl = await db.collection("users")
    // var values = await userColl.find({}).toArray()
    res.json(values)
})

router.get('/clientss', async (req, res) => {

    let collection = await db.collection("geometries") // collection 
    var values = await collection.find({ 'geometry.geometry.type': 'Point' }).toArray()
    res.json(values)
});

router.get('/getRoles', async (req, res) => {

    let collection = await db.collection("settings") // collection 
    var values = await collection.findOne({ 'proprety': 'role' })
    //console.log("---------  send data -----------")
    res.json(values)
})

router.get('/secteurss', async (req, res) => {

    let collection = await db.collection("geometries") // collection 
    var values = await collection.find({ 'geometry.geometry.type': 'MultiPolygon' }).toArray()
    //console.log("---------  send data -----------")
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
    ////console.log(arrv)
    var sec = await collectiongeom.find({ 'geometry.geometry.type': 'MultiPolygon', 'geometry.properties.idSecteur': { $in: arrv } }).toArray()
    res.json(sec)
})
//*** Get Sector affected to a User (fix query structure) */
router.get('/getSectorByUser', verifyToken, async (req, res) => {
    var userId = req.userId;
    console.log("***** Get Sectors Based on User:" + userId + " *******")
    let collectionSec = await db.collection("secteurs") //collection where ids are stored 
    var values = await collectionSec.aggregate([
        {
            $match: {
                users: ObjectId(userId)
            }
        },
        {
            $lookup: {
                from: "geometries",
                localField: "nameSecteur",
                foreignField: "geometry.properties.idSecteur",
                as: "info"
            }
        },
        { "$unwind": "$info" },
        { "$match": { "info.geometry.geometry.type": "MultiPolygon" } },
    ]).toArray();
    ListInfo = []
    values.forEach(element => {
        ListInfo.push(element)
    });
    res.status(200).json(ListInfo)
})

//*** Get PDV by user (I changed the structure of the Query ) */
router.get('/getClientByUser', verifyToken, async (req, res) => {
    var userId = req.userId;
    console.log("***** Get PDV Based on User: " + userId + " *******")
    let collectionSec = await db.collection("secteurs") //collection where ids are stored 
    var values = await collectionSec.aggregate([
        {
            $match: { users: ObjectId(userId) }
        },
        {
            $lookup: {
                from: "geometries",
                localField: "points.point",
                foreignField: "_id",
                as: "info"
            }
        },
        { $project: { info: 1, _id: 0 } }

    ]).toArray();
    ListInfo = []
    a = []
    // console.log("reqclientvalues",values)
    values.forEach(elemm => {
        elemm.info.forEach(async (elem) => {
            ListInfo.push(elem)
        });
    });
    All_PDV = ListInfo.map(async (elem) => {
        // if (elem.geometry.properties.NFC != null && elem.geometry.properties.NFC != undefined) {
        //     elem.geometry.properties.status = "green"
        // }
        if (elem.geometry.properties?.nfc != undefined) {
            var element = elem.geometry.properties;
            if (element.nfc.NFCPhoto != null) {
                try {
                    console.log(element.nfc)
                    await test1(db, ObjectId(element.nfc.NFCPhoto)).then(re => {
                        elem.geometry.properties.NFCP = re
                    }).catch(err => console.log(err))
                } catch (err) {
                    // console.log("***************")
                }
            } else {
                elem.geometry.properties.NFCP = null
            }
            if (element?.PVPhoto != null) {
                console.log(element?.PVPhoto)
                await test1(db, ObjectId(element.PVPhoto)).then(re => {
                    elem.geometry.properties.PVP = re
                }).catch(err => console.log(err))
            } else {
                elem.geometry.properties.PVP = null
            }
        }
        a.push(elem)
    })
    Promise.all(All_PDV).then(ee => {
        res.json(a)
    }).catch(err =>
        console.log(err)
    );

})

/* GET clients Based on User */
// router.get('/clients', verifyToken, async (req, res) => {
//     var userId = req.userId;
//     let collectionSec = await db.collection("secteurs") //collection where ids are stored 
//     let collectiongeom = await db.collection("geometries")
//     var values = await collectionSec.aggregate([
//         { $match: { users: ObjectId(userId) } },
//         { $project: { points: 1, _id: 0 } }
//     ]).toArray();
//     var arrv = [];
//     a = []
//     values.forEach(elm => {
//         elm.points.forEach(e => arrv.push(ObjectId(e.point)), err => console.log(err))
//     }, err => console.log(err))
//     var sec = await collectiongeom.find({ 'geometry.geometry.type': 'Point', '_id': { $in: arrv } }).toArray()
//     curs = sec.map(async (elem) => {
//         if (elem.geometry.properties.NFC) {
//             ///data injected by script 
//             elem.geometry.properties.status = "green"
//         }
//         if (elem.geometry.properties?.nfc != undefined) {
//             var element = elem.geometry.properties;
//             await test1(db, ObjectId(element.nfc.NFCPhoto)).then(re => {
//                 elem.geometry.properties.NFCP = re
//             }).catch(err => console.log(err))
//             await test1(db, ObjectId(element.PVPhoto)).then(re => {
//                 elem.geometry.properties.PVP = re
//             }).catch(err => console.log(err))
//         }
//         a.push(elem)
//     })
//     Promise.all(curs).then(ee => {
//         res.json(a)
//     }).catch(err => console.log(err));
// })

// get client by seller   (Fadma's code)
router.get('/getClientBySeller/:id', async (req, res) => {
    var status = await getClientBySeller(req.params.id)
    res.json(status)
})

/////////// get client by auditor  (Fadma's code)
router.get('/getClientByAuditor/:id', async (req, res) => {
    var status = await getClientByAuditor(req.params.id)
    res.json(status)
})
/////////////////////////////
router.post('/validate', async (req, res) => {
    let id = req.body.id;
    let status = req.body.status
    await validateData(id, status);
    res.status(200).json("client insterted from ANg")
})

router.post('/deleteUser', async (req, res) => {
    let user = req.body;
    let userColl = db.collection("users")
    var updated = await userColl.updateOne({ _id: ObjectId(user._id) },
        { $set: { "status": "out of work" } })
    console.log(updated)
})

router.get('/getSectorsByUser', async (req, res) => {
    let userId = req.query.userId
    console.log(userId)
    let sectColl = db.collection("secteurs")
    var values = await sectColl.aggregate([
        { $match: { users: ObjectId(userId) } },
        { $project: { nameSecteur: 1, _id: 0 } }
    ]).toArray();
    res.json(values)
})

router.post('/restoreUser', async (req, res) => {
    let user = req.body;
    let userColl = db.collection("users")
    var updated = await userColl.updateOne({ _id: ObjectId(user._id) },
        { $set: { "status": "Active" } })
    console.log(updated)
})

async function InsertClient(client, res) {
    //console.log("/n /n ************************** /n /n")
    try {
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
        var id_pv = null, id_NFC = null;
        //console.log("PhotoofClient"+client.PVPhoto)
        if (client.PVPhoto != null) {
            await test(db, client.NomPrenom, client.PVPhoto).then(s => id_pv = s._id).catch(err => console.log(err))
        }
        if (client.nfc.NFCPhoto != null) {
            await test(db, client.NomPrenom, client.nfc.NFCPhoto).then(s => id_NFC = s._id).catch(err => console.log(err)) //PV photo
        }
        client.nfc.NFCPhoto = id_NFC
        //console.log(id_NFC)
        //console.log(id_pv);
        //console.log("-------------- " + client.lat)
        //console.log(client)
        //var id = new ObjectId();
        //console.log("=========== id" + id)

        var id = new ObjectId();
        //console.log("=========== id" + id)
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
            Code_Secteur_OS: (client.sector != null) ? parseInt(client.sector) : 901011082,
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
        delete clientinfo.idGeometry;
        var clientGeo = GeoJSON.parse(clientinfo, { Point: ['lat', 'lon'] }); // convert to GeoJson
        geometries.insertOne({ _id: id, geometry: clientGeo }).then(result => {
            var id = result.insertedId
            var up = secteurs.updateOne({ "nameSecteur": clientinfo.Code_Secteur_OS, users: ObjectId(clientinfo.userId) },
                { $addToSet: { points: { "point": id, "route": null } } }).then(ss => {
                    res.status(200).json("Done")
                })
            //console.log("$$$$$$$$$$$$$$$$$  created $$$$$$$$$$$$$$$$$$$$$$$$")
            //console.log(up)
        }).catch(error => console.log(error))
    }
    catch (error) {
        console.log(error)
    }
    // await collection.insertOne(clientinfo)
    // ////********* Add in geometries *****************/
    // let getInsertedId; //// put Id inserted
    // delete clientinfo.idGeometry;
    // var clientGeo = GeoJSON.parse(clientinfo, { Point: ['lat', 'lon'] }); // convert to GeoJson
    // geometries.insertOne({ _id: id, geometry: clientGeo }).then(result => {
    //     var id = result.insertedId
    //     var up = secteurs.updateOne({ "nameSecteur": clientinfo.Code_Secteur_OS, users: ObjectId(clientinfo.userId) },
    //         { $addToSet: { points: { "point": id, "route": null } } }).then(ss => {
    //             res.status(200).json("Done")
    //         })
    //     //console.log("$$$$$$$$$$$$$$$$$  created $$$$$$$$$$$$$$$$$$$$$$$$")
    //     //console.log(up)
    // }).catch(error => console.log(error))
}

async function updateClient(client) {

    let collection = db.collection("clients") // collection clients
    let geometries = db.collection("geometries") /// geometries Collections
    let secteurs = db.collection("secteurs")
    var id_NFC, id_pv;
    console.log("********************")
    if (client.geometry.properties.NFCP == null) {
        console.log(client.geometry.properties.nfc.NFCPhoto)
        await test(db, client.geometry.properties.NomPrenom, client.geometry.properties.nfc.NFCPhoto).then(s => id_NFC = s._id, err => console.log(err)) //PV photo
        console.log("NFC photo id: " + id_NFC)
    } else {
        console.log(client.geometry.properties.nfc.NFCPhoto)
        id_NFC = ObjectId(client.geometry.properties.nfc.NFCPhoto);
    }
    if (client.geometry.properties.PVP == null) {
        console.log(client.geometry.properties.PVPhoto)
        await test(db, client.geometry.properties.NomPrenom, client.geometry.properties.PVPhoto).then(s => id_pv = s._id, err => console.log(err))
        console.log("PV photo id: " + id_pv);
    } else {
        console.log(client.geometry.properties.PVPhoto);
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
        var clientGeo = GeoJSON.parse(clientinfo, { Point: ['lat', 'lon'] }); // convert to GeoJson
        var updated = await geometries.updateOne({ _id: ObjectId(client._id) },
            { $set: { "geometry": clientGeo } })
        console.log(updated)
        console.log("********** geometrie updated *******")
    })
}


async function validateData(id, status) {

    let geometries = db.collection("geometries") /// geometries Collections
    var updated = await geometries.updateOne({ "_id": ObjectId(id), "geometry.geometry.type": "Point" },
        {
            $set:
            {
                "geometry.properties.status": status,
            }
        })
}

router.post('/AddClient', async (req, res) => {
    let client = req.body;
    //console.log(client)
    await InsertClient(client, res);


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
}

/// Generate Password
async function GenerateHashPassword(password) {
    let salt_value = await bcrypt.genSalt(salt);
    var encrypted_password = await bcrypt.hash(password, salt_value);
    return encrypted_password;
}

/// get User from database
async function getUser(user) {
    console.log("find user")
    console.log(user)


    let collection = db.collection("users")

    var status = { value: 401, data: null }

    var User = await collection.find({ email: user.email }).toArray()
    if (User.length > 0) {
        var FindUser;
        User.forEach(async (u) => {
            console.log(u)
            if (u.role == user.role) {
                console.log("****")
                FindUser = u;
            } else {
                console.log("$$$$$$$$$$")
                return null;
            }
        })
        console.log("Find User")
        console.log(FindUser)
        if (FindUser != null) {
            // ********* get User permissions *********
            var permissions = [];
            let roleCollection = db.collection("settings")
            const doc = await roleCollection.findOne({ proprety: 'role' });
            doc.details.roles.forEach(element => {
                if (element.name == user.role) {
                    permissions = element.permissions
                }
            });
            FindUser.permissions = permissions

            var valid = await ValidPassword(user.password, FindUser.password)
            if (valid) {
                let playload = { subject: FindUser._id }
                let token = jwt.sign(playload, 'secretKey')
                status.value = 200
                status.data = { 'token': token, 'user': FindUser }
            } else {
                status.value = 401
                status.data = "invalid password"
            }
        } else {
            status.value = 403
            status.data = "invalid Role"
        }

    } else {
        status.value = 403
        status.data = "invalid User"
    }
    return status;
}
//***  Login */
router.post('/login', async (req, res) => {

    //console.log(JSON.stringify(req.headers));
    let user = req.body;
    //console.log(user)
    var status = await getUser(user)
    res.status(status.value).send({ 'Data': status.data })
})

router.get('/GeEmail', async (req, res) => {
    console.log("****** get All Email *****")
    let collection = db.collection("users")
    var FindUser = await collection.find({}).project({ _id: 0, email: 1 }).toArray()
    res.json(FindUser)
})
////
async function getClientBySeller(id) {
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
        cli = client[0]
        cli.PVP = null;
        cli.NFCP = null;
        status.data = { 'client': client }
        if (cli.PVPhoto != null) {
            await test1(db, ObjectId(cli.PVPhoto)).then(re => {
                cli.PVP = re
            })
        }

        if (cli.nfc.NFCPhoto != null) {
            await test1(db, ObjectId(cli.nfc.NFCPhoto)).then(re => {
                cli.NFCP = re
            })
        }
        status.data = { 'client': cli }
    }
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
        cli = client[0]
        console.log(cli)
        cli["PVP"] = null;
        cli["NFCP"] = null;
        status.data = { 'client': client }
        if (cli.PVPhoto != null) {
            await test1(db, ObjectId(cli.PVPhoto)).then(re => {
                cli.PVP = re
            })
        }

        if (cli.nfc.NFCPhoto != null) {
            await test1(db, ObjectId(cli.nfc.NFCPhoto)).then(re => {
                cli.NFCP = re
            })
        }
        status.data = { 'client': cli }
    } else {
        al = [];
        return al;
    }
    return cli;
}


router.post('/login', async (req, res) => {
    let user = req.body;
    var status = await getUser(user)
    res.status(status.value).send({ 'Data': status.data })
})

router.post('/register', async (req, res) => {
    let user = req.body;
    await AddNewUser(user).then(ress => {

        res.status(200).json("User inserted/Updated")
    }).catch(err => {
        console.log(err);
        res.status(401).json("Not inserted")
    });

})

async function AddNewUser(user) {
    var pass
    if (user.userinfo.existe) {
        pass = user.userinfo.password
    } else {
        pass = await GenerateHashPassword(user.userinfo.password)
    }
    let collection = db.collection("users") // collection users 
    console.log("user", user)
    user.SectorsByRoles.forEach(async (r) => {
        await collection.insertOne({
            UserID: user.userinfo.UserID,
            name: user.userinfo.name,
            phone: user.userinfo.phone,
            CIN: user.userinfo.CIN,
            role: user.userinfo.role,
            email: user.userinfo.email,
            password: pass,
            status: user.userinfo.status,
            role: r.role
        }).then(result => {
            console.log(result.insertedId)
            var id = result.insertedId
            r.value.forEach(sector =>
                AddUserToSector(id, sector)
            )
        })
    })
}

async function AddUserToSector(id, sec_name) {
    console.log(id)
    console.log("|*********** User affected to sector: " + sec_name + " **********************|")
    let collection = db.collection("secteurs");
    await collection.updateMany({
        nameSecteur: Number(sec_name)
    },
        {
            $addToSet: { "users": id }
        });
}

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
/////////////////

router.get('/client', async (req, res) => {

})

async function ValidPassword(passwordG, passwordD) {
    var result = await bcrypt.compare(passwordG, passwordD)
    return (result);
}

///////// *************** Settings hafsa's code *************** ///////

router.post("/settings", async (req, res) => {
    //console.log("**************set settings in the dataBase******************")
    var time = req.body.time;
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
    var obj = req.query
    console.log("param")
    response = ""
    console.log(obj)
    if (obj?.user == "CountUser") {
        let users = await db.collection("users")
        var RoleCount = obj.role
        let values = await users.find({ "role": RoleCount }).toArray()
        response = values.length
    } else {
        console.log("test")
        var proprety = obj.param;
        let collection = await db.collection("settings") // collection 
        var values = await collection.find({ "proprety": proprety }).toArray()
        response = values[0]
    }
    console.log(values)
    res.json(response)

})
//////////***********************************////////////////////////
//////////***********************************////////////////////////
router.get("/GetClient/:id", async (req, res) => {
    console.log("get client")
    let geometries = await db.collection("geometries")
    const client = await geometries.findOne({ _id: new ObjectId(req.params.id) });
    res.status(200).send(client);
})
//////////////////////////////////////////////////////////////
router.get('/getAllUsers', async (req, res) => {
    list = []
    let usersColl = await db.collection("users")
    var values = await usersColl.aggregate([
        {
            $lookup: {
                from: "secteurs",
                localField: "_id",
                foreignField: "users",
                as: "sectors"
            }
        }]).toArray();
    // let userColl = await db.collection("users")

    // var values = await userColl.find({}).toArray()
    res.json(values)

})
router.post("/DeleteRequest", async (req, res) => {

    console.log("get client : ")
    dataclient = req.body.data
    console.log(req.body)
    // NomClient=dataclient.geometry.geometry.properties.NomPrenom
    // console.log(NomClient)

    client = {}
    var id_Photo;
    var id_Video;

    DeleteRequest = await db.collection("DeleteRequest")


    if (req.body.Photo._imageAsDataUrl != null) {
        var photo = req.body.Photo._imageAsDataUrl
        await test(db, ObjectId(dataclient._id), photo).then(res => id_Photo = res._id, err => console.log(err))
    }

    if (req.body.video != null) {
        await test(db, ObjectId(dataclient._id), req.body.video).then(res => { id_Video = res._id; console.log(res) }, err => console.log(err))
    }
    //client["_id"] = ObjectId(dataclient._id);
    client["NomPrenom"] = dataclient.geometry.properties.NomPrenom;
    client["Code_Secteur_OS"] = dataclient.geometry.properties.Code_Secteur_OS;
    client["Video"] = id_Video;
    client["status"] = "Waiting";
    client["userId"] = req.body.user;
    client["role"] = req.body.role;
    client["Raison"] = req.body.raison;
    client["Photo"] = id_Photo;
    client["created_at"] = new Date();
    client["Coordinates"] = dataclient.geometry.geometry.coordinates;
    await DeleteRequest.updateOne({ _id: ObjectId(dataclient._id) }, {
        $set: client
    }, { upsert: true });
    res.status(200).json("Deleted Successfully")
})

router.get("/ReadVideo/:idG", async (req, res) => {
    DeleteRequest = await db.collection("DeleteRequest")
    console.log("wiliwlwi ");
    client = await DeleteRequest.findOne({ _id: ObjectId(req.params.idG) });
    console.log(client)
    console.log(req.params.idG);
    let video = await test1(db, client.Video)
    console.log(client)
    //console.log(video)
    res.json(video)
})
////
router.get("/image", async (req, res) => {
    console.log(req.query.id)
    await test1(db, ObjectId(req.query.id)).then(re => {
        //console.log("hna 1")
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from("<img src='" + re + "'></img"));
    })

})
//////////////////******* Extract data (Hafsa's Code) ***********/////////////////////
router.post("/extract", async (req, res) => {
    let geometries = await db.collection("geometries")
    var condition = req.body
    console.log(condition)
    var queries = []
    queries.push({ "geometry.geometry.type": "Point" })
    if (condition?.Sectors) {
        console.log("found")
        queries.push({
            "geometry.properties.Code_Secteur_OS": {
                $in: condition.Sectors
            }
        })
    }
    if (condition?.StartDate) {
        queries.push({
            "geometry.properties.created_at": {
                $gte: new Date(condition.StartDate)
            }
        })
    }
    if (condition?.EndDate) {
        queries.push({
            "geometry.properties.created_at": {
                $lte: new Date(condition.EndDate)
            }
        })
    }
    if (condition?.TypeDPV) {
        queries.push({
            "geometry.properties.TypeDPV": {
                $in: condition.TypeDPV
            }
        })
    }
    let values = await geometries.aggregate([
        {
            $match: {
                $and:
                    queries
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
    //console.log(values)
    //res.json(values)
    var test = values.map((elem) => {
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
        elem.info = all
        return elem;
    });
    DataAll = []
    var to = test.map(async (element) => {
        var imgurl = "http://localhost:3000/api1/image?id="
        var Data = {
            "Identifiant system": element._id,
            "code": (element.geometry.properties.Code_Client != null) ? element.geometry.properties.Code_Client : "",
            "X": element.geometry.geometry.coordinates[1],
            "Y": element.geometry.geometry.coordinates[0],
            "Date_Creation": element.geometry.properties.created_at,
            "NFC_ID": (element.geometry.properties.NFC != null) ? element.geometry.properties.NFC : element.geometry.properties.nfc?.Numero_Serie,
            "NFC_UUID": (element.geometry.properties.NFC != null) ? element.geometry.properties.NFC : element.geometry.properties.nfc?.UUID,
            "Code_Secteur_OS": element.geometry.properties.Code_Secteur_OS,
            "machine": (element.geometry.properties.machine != null) ? element.geometry.properties.machine : "",
            "TypeDPV": (element.geometry.properties.TypeDPV != null) ? element.geometry.properties.TypeDPV : "",
            "NomPrenom": (element.geometry.properties.NomPrenom != null) ? element.geometry.properties.NomPrenom : element.geometry.properties.Nom_Client,
            "PhoneNumber": (element.geometry.properties.PhoneNumber != null) ? element.geometry.properties.PhoneNumber : element.geometry.properties.Telephone_Client,
            "Photo_PDV": (element.geometry.properties.PVPhoto != null) ? imgurl + element.geometry.properties.PVPhoto : '',
            "Passage_Auditeur": "NO",
            "Auditeur_ID": "",
            "Date_Reception_Auditor": "",
            "Nom_Auditeur": "",
            "TypeAuditeur": "",
            "Phone_Auditeur": "",
            "Photo_Auditor": "",
            "Valid_Auditeur": "",
            "Passage_Vendeur": "NO",
            "SalesPerson_ID": "",
            "Date_Reception_Vondeur": "",
            "Nom_Vendeur": "",
            "Type_Vendeur": "",
            "Phone_Vendeur": "",
            "Photo_Vendeur": "",
            "Valid_Vondeur": "",
            "Supprime_Audtior": "",
            "Supprime_Vondeur": ""
        }
        await IsDeletedBy(ObjectId(element._id), "Seller").then(ress => {
            Data["Supprime_Vondeur"] = String(ress)
            console.log(Data["Supprime_Vondeur"])
        }).catch(err => {
            Data["Supprime_Vondeur"] = String(err)
        });
        await IsDeletedBy(ObjectId(element._id), "Auditor").then(ress => {
            console.log("Auditor")
            Data["Supprime_Audtior"] = String(ress)
        }).catch(err => {
            Data["Supprime_Audtior"] = String(err)
        });
        element.info.forEach(info => {
            if (info.userRole === "Auditor") {
                Data.Passage_Auditeur = "YES"
                Data.Auditeur_ID = info.userId
                Data.Nom_Auditeur = info.NomPrenom
                Data.Date_Reception_Auditor = info.created_at
                Data.TypeAuditeur = Data.TypeDPV
                Data.Photo_Auditor = imgurl + info.PVPhoto
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
                Data.Photo_Vendeur = imgurl + info.PVPhoto
                Data.Phone_Vendeur = info.PhoneNumber
                if (element.geometry.properties.status == "black") {
                    Data.Valid_Vondeur = "NO"
                } else {
                    Data.Valid_Vondeur = "YES"
                }
            }
        })
        DataAll.push(Data)
        //console.log(DataAll.length)
        element = Data;
        return element;
    });
    Promise.all(to).then(ee => {
        ////console.log(a.length)
        console.log("---- Extract ----")
        //console.log(list)
        res.status(200).json(DataAll)
    });
});

///*** Hafsa Function  ****///
async function IsDeletedBy(id, role) {
    return new Promise(async (resolve, reject) => {
        let delReq = await db.collection("DeleteRequest")
        var values = await delReq.find({ _id: id, role: role }).toArray()
        if (values.length > 0)
            resolve("Yes");
        else
            reject("No")
    })
}
////////********************************************************//////////////////////

router.get('/getAllDeleteRequests', async (req, res) => {

    list = []
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
    //res.json(values)
    console.log(values)
    curs = values.map(async (elem) => {
        console.log(elem.created_at)
        // console.log(elem)
        var id_raison = (elem.Video != null) ? elem.Video : (elem.Photo != null) ? elem.Photo : null;
        console.log(id_raison)
        ////console.log(elem) //
        if (elem.PDV[0].geometry.properties?.nfc != undefined) {
            var element = elem.PDV[0].geometry.properties;
            //elem.geometry.properties.status="red_white"
            if (element.nfc.NFCPhoto != null) {
                await test1(db, ObjectId(element.nfc.NFCPhoto)).then(re => {
                    //console.log("hna 1")
                    elem.PDV[0].geometry.properties.NFCP = re
                })
            }
            if (element.PVPhoto != null) {
                await test1(db, ObjectId(element.PVPhoto)).then(re => {
                    //console.log("hna 2")
                    elem.PDV[0].geometry.properties.PVP = re
                });
            }
            if (id_raison != null) {
                await test1(db, id_raison).then(re => {
                    console.log("------------- get -------")
                    console.log(re.length)
                    elem.prove = re
                });
            }
            //a.add(elem)
        }
        /*if(elem.Photo != undefined){
            await test1(db, ObjectId(elem.Photo)).then(re => {
                //console.log("hna 1")
                elem.PhotoURL = re
            })
        }*/

        list.push(elem)

    })
    ////console.log(a.length)
    Promise.all(curs).then(ee => {
        console.log("---- Deleted Requestes ----")
        list.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //sort by date desc

        res.json(list)
    });

    // res.json(values)
})

router.post('/updateRole', async (req, res) => {

    let role = req.body.request
    console.log(role)

    let collection = db.collection("settings")
    //------ this to update each element in array without duplicate---
    // var updated= await collection.updateOne(
    //     {proprety: "test","details.roles.name": role.role},
    //     {$addToSet: {"details.roles.$.permissions" :{
    //         $each:
    //         role.permissions
    //     }}} )
    var updated = await collection.updateOne(
        { proprety: "role", "details.roles.name": role.role },
        { $set: { "details.roles.$.permissions": role.permissions } })
    console.log(updated)
    res.status(200).json(updated)
})

router.post('/addRole', async (req, res) => {
    let role = req.body.request
    console.log(role)

    let collection = db.collection("settings")

    var updated = await collection.updateOne(
        { proprety: "role" },
        { $addToSet: { "details.roles": { 'name': role.role, 'permissions': role.permissions } } })
    console.log(updated)
    res.status(200).json(updated)
})

router.get('/UserRoles/:email', async (req, res) => {
    let email = req.params.email
    let listOfRoles = []
    users = await db.collection("users")

    roles = await users.find({ "email": email }).toArray()
    roles.forEach(el => {
        // let listOfRoles=[]
        listOfRoles.push(el.role)
        // console.log("roles",listOfRoles)

    })

    console.log("roles2", listOfRoles)
    res.send(listOfRoles).status(200)

})

router.post('/ValidateDeleteClient', async (req, res) => {
    let _id = req.body.request._id
    let request = req.body.request

    let DeleteRequest = db.collection("DeleteRequest")
    let geometries = db.collection("geometries");

    if (request.status == "Deleted") {
        let value = geometries.findOne({ _id: ObjectId(_id) }).then(async (result) => {
            console.log(result)
            result.geometry.properties.status = 'deleted'
            await geometries.updateOne({ _id: ObjectId(_id) },
                { $set: { "geometry.properties": result.geometry.properties } }).then(result => {
                    console.log(result)
                    console.log("---Done Deleting Client---")
                })
        })
    }
    if (request.Photo != null) {
        request.Photo = ObjectId(request.Photo)
    } else if (request.Video != null) {
        request.Video = ObjectId(request.Video)
    }
    delete request?.prove;
    delete request.PDV;
    delete request._id;
    console.log(request)
    DeleteRequest.updateOne({ _id: ObjectId(_id) }, {
        $set: request
    }).then(resu => {
        console.log(resu)
        res.status(200).json("deleted Successfully")
    }).catch(err => {
        res.status(500)
    })
    //console.log(value)
    /*await geometries.updateOne({ _id: ObjectId(_id) },
    { $addToSet: { "status_deleted": true }}).then(result=>{
        console.log(result)
        console.log("---Done Deleting Client---")
       
    })*/

});

router.post('/deleteo', function (req, res, next) {
    console.log("chwya labasssss")
    console.log(req.body); // see what got uploaded
    //console.log(req.file);
    // let uploadLocation ='/uploads/'+"test.txt" // where to save the file to. make sure the incoming name has a .wav extension
    //fs.writeFileSync(uploadLocation,Buffer.from(new Uint8Array(req.file.buffer))); // write the blob to the server as a file
    //let collection=db.collection("testVideo")
    //collection.insertOne(req.body)
    res.status(200).json("test"); //send back that everything went ok
});

router.get("/VideoReadHafsa", async (req, res) => {
    console.log("hhhhhhhh")
    let collection = db.collection("testVideo")
    var Values = await collection.find({}).toArray()
    res.json(Values[0])
});

router.put("/UpdateUser", async (req, res) => {
    user = req.body
    console.log(req.body)

    users = await db.collection("users")
    secteurs = await db.collection("secteurs")
    if (user.generated) {
        user.password = await GenerateHashPassword(user.password)
    }
    console.log(req.body)
    await users.updateMany({ _id: ObjectId(user._id) }, { $set: { "UserID": user.UserID, "name": user.name, "phone": user.phone, "CIN": user.CIN, "role": user.role, "email": user.email, "password": user.password } }).then(res => console.log(res))
    user.sectors.forEach(async el => {

        await secteurs.updateOne({ nameSecteur: Number(el) }, { $addToSet: { users: ObjectId(user._id) } }).then(res => console.log(res))

    })

    user.SectorDeleted.forEach(async el => {
        await secteurs.updateOne({ nameSecteur: Number(el) }, { $pull: { users: ObjectId(user._id) } }).then(res => console.log(res))
    })

})
////************************* INJECTION ***********************/////

var insertedId;  // variable where the ID inserted will be stored 
var insertedIds;  // variable where All IDs inserted will be stored

async function getInsertedIds(result) {
    if (result.insertedId != null) {
        insertedId = await result.insertedId
        //console.log(insertedId)
    } else {
        insertedIds = await result.insertedIds
    }
}

async function putEachData(res, collection) {
    if (res.geometry.type == "MultiPolygon") {
        collection.updateOne({ "geometry.geometry.type": "MultiPolygon", "geometry.properties.idSecteur": res.properties.idSecteur }, { $set: { geometry: res } }, { upsert: true }).then(rr => console.log(rr)).catch(error => console.log(error))
    } else {
        await collection.updateOne({ "geometry.properties.Code_Client": res.properties.Code_Client }, { $set: { geometry: res } }, { upsert: true }).then().catch(error => console.log(error))
        //    console.log("//************start updating nfc object************//")
        //    await collection.updateMany({"geometry.geometry.type":"Point", "geometry.properties.NFC": { $exists: true}},{$set: {"geometry.properties.nfc":{UUID:null,Numero_Serie:null,Technologies:null,Type_card:null,NFCPhoto:null}}}).then().catch(error => console.log(error))
        //    await collection.updateMany({"geometry.geometry.type":"Point","geometry.properties.NFC": { $exists: true}},{ $rename: {"geometry.properties.NFC": "geometry.properties.nfc.UUID"}}).then().catch(error => console.log(error))
        //    console.log("//************start updating Status************//")
        //    await collection.updateMany({"geometry.geometry.type":"Point","geometry.properties.nfc.UUID":{$ne:null}},{$set:{"geometry.properties.status":"purple"}}).then().catch(error => console.log(error))
        //    await collection.updateMany({"geometry.geometry.type":"Point","geometry.properties.nfc.UUID":{$eq:null}},{$set:{"geometry.properties.status":"red"}}).then().catch(error => console.log(error))
    }
}


async function PutDataGeometries(collection, file) {
    console.log("\n ---------------- Start adding Data to geometries------------------------------")
    var file_cmg_sectors = JSON.parse(fs.readFileSync(file, { 'encoding': 'UTF-8' })).features
    // var file_onion_sectors = JSON.parse(fs.readFileSync("./onion_geomtries.geojson", { 'encoding': 'UTF-8' })).features
    // var file_cmg_jointure = JSON.parse(fs.readFileSync("./cmg_jointure.geojson", { 'encoding': 'UTF-8' })).features
    // var file_onion_jointure = JSON.parse(fs.readFileSync("./onion_jointure.geojson", { 'encoding': 'UTF-8' })).features
    file_cmg_sectors.forEach(res => { putEachData(res, collection) }, err => console.log(err))
    // file_onion_sectors.forEach(res => { putEachData(res, collection) }, err => console.log(err))
    // file_cmg_jointure.forEach(res => { putEachData(res, collection) }, err => console.log(err))
    // file_onion_jointure.forEach(res => { putEachData(res, collection) }, err => console.log(err))
    console.log("\n ------------------------ End Adding Geometries --------------------------------")
}

async function InjectSecteurData(elem) {
    console.log("\n --------------------- Start Injecting Sector Data ------------------------------")
    var id = db.collection("users").findOne()
    var arrNull = []  // put Data that Have Null in idSecteur ( didn't join with any sector)
    elem.forEach(value => {
        var val = value.geometry;
        if (val.properties.idSecteur != null) {
            db.collection("secteurs").updateOne(
                { "nameSecteur": val.properties.idSecteur }, {
                $addToSet: { points: { "point": value._id, "route": null } },
                $setOnInsert: {
                    routes: [],
                    typePDV: [],
                    machine: val.properties.machine,
                    secteur: null,
                    users: [ObjectId("61e6bcd032dd6008968e5220")]
                }
            },
                { upsert: true }
            )
        } else {
            arrNull.push(val.properties.Identifiant)
        }
    })
}

//////////////**********************/////////////////////

module.exports = router