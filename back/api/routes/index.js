const express=require("express")
const router= express.Router()
const Routes=require("./users")


router.use("/users",Routes )

module.exports = router