const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto");

//CREATE
// POST http://localhost:5000/api/producto FUNCIONA!!! 
//CREO EL PRODUCTO 
router.post('/',(req,res,next) => { 
  Producto.create(req.body).then((producto) => {
    res.status(201).send(producto)
  }) 
})
// READ BUSCAR POR UNO  GET http://localhost:5000/api/producto/:id
router.get('/:id',(req,res,next) => { 
  Producto.findByPk(req.params.id).then((producto) => {
    res.status(200).send(producto)
  }) 
})

//UPDATE PUT  http://localhost:5000/api/producto/:id
router.put('/:id',(req,res,next) => {
  Producto.update(
    req.body,{
      where:{
        id:req.params.id
      },returning:true,
    }).then((update) => {
      res.send(update)
    })
})


//MUESTRO TODOS LOS PRODUCTOS GET http://localhost:5000/api/producto
router.get('/',(req,res,next) => {
  Producto.findAll()
  .then((producto) => {
  res.send(producto)
  })
   
})

//DELETEA UNO POR ID  DELETE http://localhost:5000/api/producto/1(id)
router.delete("/:id", (req, res, next) => {
    Producto.destroy({
        where: { id: req.params.id },
      })
      .then(() => {
        res.sendStatus(202);
      });
  });
  

module.exports = router;