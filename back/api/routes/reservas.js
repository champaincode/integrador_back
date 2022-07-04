const express= require("express")
const router = express.Router();
const Reservas = require("../models/Reservas")


router.get('/',(req,res,next) => {
    console.log("hiciste un get en reservas")
    res.sendStatus(200)

})

module.exports = router