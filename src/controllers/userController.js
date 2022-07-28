const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")


const createUser = async function (req, res) {
    try {
        let data = req.body;


    let savedData = await userModel.create(data)

    return res.status(201).send({ status: true, data: savedData })

  }
  catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}


//login

const login = async function (req, res) {

    try {
      
      let email = req.body.email;
      let password = req.body.password;

      let specificUser = await userModel.findOne({ email: email, password: password });

      if (!specificUser)
        return res.status(404).send({
          status: false,
          logInFailed: "username or the password is not correct",
        });
  
  
      let token = jwt.sign(
        {
          userId: specificUser._id,
          batch: "Project3-topUp-Management",
          organisation: "FunctionUp",
        },
        "TOPUP_Management_Key", { expiresIn: "24hr" },
      );
      res.header('x-api-key', token);
      return res.status(201).send({ status: true, TOKEN: token });
    }
  
    catch (err) {
      return res.status(500).send({ ERROR: err.message });
    }
}


module.exports.createUser=-createUser;
module.exports.login=login;