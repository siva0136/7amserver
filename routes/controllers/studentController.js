var express = require('express');
var jwt = require("jsonwebtoken")
var router = express.Router();
var validateToken = require("../../common/validateToken")
const {getStudentService,regStudentService,loginService} = require("../services/studentService");

router.get(
    '/get-std',
    validateToken,//this common function       
     async function(req, res, next) {
    console.log("getStudentControlled")
    const result = await getStudentService(req);
    res.send(result)
});


router.get(
    '/get-std-by-id',
    validateToken,
    function(){

})
//http://localhost:2020/std/reg-std
router.post('/reg-std', async function(req, res, next) {
    const result = await regStudentService(req);
    res.send(result)
});


router.post('/login', async function(req, res, next) {
   const result= await loginService(req);
   res.send(result)
});



module.exports = router;