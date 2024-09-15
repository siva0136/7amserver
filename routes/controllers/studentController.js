var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var validateToken = require("../../common/validateToken");
const {
  getStudentService,
  regStudentService,
  loginService,
  getStdByIdService,
  deleteStudentServece,
  updateStudentServece,
} = require("../services/studentService");

router.get(
  "/get-std",
  //this common function

  validateToken,
  async function (req, res, next) {
    console.log("getStudentControlled");
    const result = await getStudentService(req);
    res.send(result);
  }
);

router.get("/get-std-by-id", validateToken, function () {});

//http://localhost:2020/std/reg-std
router.post("/reg-std", async function (req, res, next) {
  const result = await regStudentService(req);
  res.send(result);
});

router.post("/login", async function (req, res, next) {
  const result = await loginService(req);
  res.send(result);
  //   try {
  //     if (result.length !== 0) {
  //       res.send(result);
  //       console.log(result);
  //     }
  //   } catch (e) {
  //     res.send(e);
  //     console.log(e);
  //   }
});

router.get("/get-user-by-id", validateToken, async function (req, res, next) {
  const result = await getStdByIdService(req);
  res.send(result);
});

router.put("/update-std/:id", validateToken, async function (req, res, next) {
  const result = await updateStudentServece(req);
  res.send(result);
});

router.delete("/delete-std", validateToken, async function (req, res, next) {
  const result = await deleteStudentServece(req);
  res.send(result);
});

module.exports = router;
