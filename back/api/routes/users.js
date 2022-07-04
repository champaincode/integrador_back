const express= require("express")
const router = express.Router();
const User = require("../models/User")
const passport = require("passport");


router.post("/register", (req,res)=>{
    User.create(req.body).then((user) => {
        res.status(201).send(user)
    })
})

router.post("/login",passport.authenticate("local"),(req,res) => {
    res.status(200).send(req.user)
  })

router.post("/logout", (req, res, next) => {
    req.logOut(error => {
      if (error) {
      return next(error)
      }
    }  )
   return res.status(200).send({})
  });



module.exports = router;