const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Producto = require("../models/Producto")

// http://localhost:5000/api/admin/alluser "para axios"
router.get("/alluser", (req, res, next) => {
  User.findAll({
    attributes:{
      exclude:["password","salt","createdAt", "updatedAt"],
      }
  })
    .then((users) => {
      return res.send(users);
    })
    .catch(next);
});   

http://localhost:5000/api/admin/allproducts FUNCIONA!!
router.get("/allproducts", (req, res, next) => {
 Producto.findAll({
        attributes:{
          exclude:["id","createdAt", "updatedAt"]
        
        }
      })
    .then((products) => {
      return res.send(products);
    })
    .catch(next);
});
http://localhost:5000/api/admin/createproducts
router.post("/createproducts", (req, res, next) => {
  Producto.create(req.body)
     .then((products) => {
      res.status(201).send(products)
     })
     .catch(next);
 });
 
 http://localhost:5000/api/admin/update/16
 router.put("/update/:id", (req, res, next) => {
  Producto.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  }).then((update) => {
    res.status(200).send(update)
  });
});

 http://localhost:5000/api/admin/delete/16
 router.delete("/delete/:id", (req, res, next) => {
  Producto.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.sendStatus(202);
  });
});


// where: {id:req.body.id}, EL WHERE ES PARA TRAER ALGO EN ESPECIFICO TODO LO QUE COINCIDA CON REQ.BODY
module.exports = router;
