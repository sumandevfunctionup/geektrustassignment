
const topUpModel = require("../models/topUpModel")
const userModel = require("../models/userModel")



const craeteTopUp = async function (req, res) {
    try {
        const data = req.body
        const userId = req.body.userId

      

        // checking if userId is valid or not
        const findUser = await userModel.find({ _id: userId })
        if (!findUser.length > 0) return res.status(400).send("error : Please enter valid userId")

        // creating topUp
        const createdTopUp = await topUpModel.create(data)
        return res.status(201).send({ topUp: createdTopUp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.createdTopUp=this.createdTopUp;