const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Producto = require("../models/Producto")

// http://localhost:5000/api/admin/alluser "para axios"
router.get("/alluser", (req, res, next) => {
  User.findAll({
    attributes:{
      exclude:["password","salt","createdAt", "updatedAt"]
    
    }
  })
    .then((users) => {
      return res.send(users);
    })
    .catch(next);
});

http://localhost:5000/api/allproducts FUNCIONA!!
router.get("/allproducts", (req, res, next) => {
 Producto.findAll({
        attributes:{
          exclude:["id","createdAt", "updatedAt"]
        
        }
      })
    .then((users) => {
      return res.send(users);
    })
    .catch(next);
});

// where: {id:req.body.id}, EL WHERE ES PARA TRAER ALGO EN ESPECIFICO TODO LO QUE COINCIDA CON REQ.BODY
module.exports = router;
