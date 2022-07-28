const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const topUpController = require("../controllers/topUpController")
const mw = require("../middleware/middleware")
  router.post('/createUser',userController.createUser);
  router.post('/login',userController.login);
  router.post('/craeteTopUp',mw.authentication,topUpController.craeteTopUp);

  module.exports = router;

