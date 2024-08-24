var mongodb = require("mongodb")

var getDB = require("../../common/getDB")
async function getStudentDAO() {
    try {
        console.log("getStudentDAO")
        // connect with db
        const db= await getDB()
        //perform required opration
       
        const collection = db.collection("students")
        const result = await collection.find({}).toArray()
        // send response to service

        return result
    } catch (e) {
        console.log(e)
    } finally {

    }

}

async function regStudentDAO(data) {
    try {
        // connect with db
        const db= await getDB()        
        const collection = db.collection("students")
        //perform required opration
        const result = await collection.insertOne(data)
        // send response to service

        return result
    } catch (e) {
        console.log(e)
    } finally {

    }
}

async function loginDAO(data){
    try{
        const db= await getDB()        
        const collection = db.collection("students");
        return await collection.find(data).toArray()
    }catch(e){
        console.log(e)
    }
}
module.exports = { getStudentDAO, regStudentDAO,loginDAO }