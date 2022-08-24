const express = require("express");

const router = express.Router();

const { Cart, User, Producto } = require("../models");

router.get("/", (req, res, next) => {
  Cart.findAll()
    .then((items) => res.send(items))
    .catch(next);
});

router.get("/:userId", (req, res, next) => {
  Cart.findAll({
    order: [["id", "ASC"]],
    where: { userId: req.params.userId},
    include: { model: Producto },
  }).then((producto) => {
    const list = producto.map((e) => {
      return {
        userId: e.userId,
        quantity: e.quantity,
        productoId: e.productoId,
        title: e.tittle,
        price: e.price,
 }})
      res.send(list)
  })
})


router.post('/',(req,res,next) => {
  Producto.findByPk(req.body.productoId).then((producto) => {
   if (producto)Cart.create(req.body).then((cart) => {
      User.findByPk(req.body.userId).then((user) => {
      cart.setUser(user)
      })
      cart.setProducto(producto)
      res.send(cart)  
    })
    .catch((err) => console.log(err));
  
      else {
        res.send("El producto no exite")
      }
    
  })
})


router.put("/:id", (req, res, next) => {
  Cart.update(req.body, {
    where:{id:req.params.id},
    returning:true,
  }).then((producto) => {
    res.status(200).send(producto)
  })
});

router.delete("/:id", (req, res, next) => {
  Cart.findOne({
    where: { id: req.params.id },
  })
    .then((item) => {
      item.destroy();
      res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;
