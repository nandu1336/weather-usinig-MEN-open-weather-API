mongoAtlasAPIPrivateKey = "14a1aa3a-4da5-4218-9c04-2415d113519e";

db_name = "sample_db";
collection_name = "users"
username = "nk732100";
password = "root";

const uri = "mongodb+srv://" + username + ":" + password + "@nk-private-projects-dat.mtn6a.mongodb.net/<dbname>?retryWrites=true&w=majority";

const MongoClient = require('mongodb').MongoClient;

function getClient() {
    console.log("call received here");
    const client = new MongoClient(uri, { useNewUrlParser: true });
    return client;
}

function closeConnection() {
    client.close();
}


function handleLogin(username, password) {

}

exports.getClient = getClient;
exports.closeConnection = closeConnection;

exports.handleLogin = handleLogin;


// client.connect(err => {
//     // if (err != null) return err;
//     console.log("no erroro found");
//     collection = client.db("sample_db").collection("users");
//     console.log("collectiono in connectAndGetColelcton=", collection);
//     console.log("collection.find in connectAndGetColelction=", collection.find({}).toArray(function (err, items) {
//         console.log("items in getClienti=", items);
//     }))
// });


// maria db 

// var conn = mysql.createConnection({
//     host: "localhost",
//     user: 'root',
//     password: 'root',
//     database: "weather",
//     port: 3306,
//     //ssl: { ca: fs.readFileSync({ ca - cert filename }) }
// });