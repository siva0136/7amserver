var mongodb = require("mongodb")

async function getDB(){
    try{
        const mongoClient = mongodb.MongoClient
        const url = "mongodb+srv://u1:p1@7am.bbp8c.mongodb.net/"
        const server = await mongoClient.connect(url)
        //perform required opration
        const db = server.db("school")
        return db
        
    }catch(e){
        console.log(e)
    }
   
}

module.exports = getDB