const express= require("express")
const router = express.Router();
const User = require("../models/User")
const passport = require("passport");
const index = require("../models/index")


router.post("/register", (req,res)=>{
    User.create(req.body).then((user) => {
        res.status(201).send(user)
    })
})



router.delete("/delete/:id", (req, res, next) => {
  User.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.sendStatus(202);
  });
});

router.post("/register/add", async (req, res) => {
  try {
    const data = await User.bulkCreate(req.body);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
  }
});

router.post("/login",passport.authenticate("local"),(req,res) => {
    res.status(200).send(req.user)
  })

// router.post("/favorites", (req,res) => {
//     .create()

// })


router.post("/logout", (req, res, next) => {
    req.logOut(error => {
      if (error) {
      return next(error)
      }
    }  )
   return res.status(200).send({})
  });



module.exports = router;