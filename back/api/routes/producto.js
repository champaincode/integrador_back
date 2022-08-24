const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto");
const { Op } = require("sequelize");

router.get('/',(req,res,next) => {
  Producto.findAll()
  .then((producto) => {
  res.send(producto)
  })
})
router.post('/cart',(req,res,next) => {
  Producto.findAll()
  .then((producto) => {
  res.send(producto)
  })
})

router.get("/drinks", (req, res, next) => {
  Producto.findAll({
    where: { drink: true },
  }).then((producto) => {
    res.send(producto);
  });
});
// POST http://localhost:5000/api/producto/foods FUNCIONA!!!
//busco todas las comidas
router.get("/foods", (req, res, next) => {
  Producto.findAll({
    where: { food: true },
  }).then((producto) => {
    res.send(producto);
  });
});
//busco comidas por id
router.get("/foods/:id", (req, res, next) => {
  Producto.findOne({
    where: { id: req.params.id, food: true },
  }).then((producto) => {
    res.status(200).send(producto);
  });
}); //busco bebidas por id
router.get("/drinks/:id", (req, res, next) => {
  Producto.findOne({
    where: { id: req.params.id, drink: true },
  }).then((producto) => {
    res.status(200).send(producto);
  });
});
//busco todas las bebidas


// busco uno de los productos SEARCH
router.post("/search/:tittle", (req, res, next) => {
  const { tittle } = req.params;
  const lower = tittle.toLowerCase();
  Producto.findAll({
    where: {
      tittle: {[Op.like]: "%" + lower + "%",},
      [Op.or]: [{ drink: true }, { food: true }],
    },
  }).then((search) => {
    res.send(search);
  });
});

// READ BUSCAR POR UNO  GET http://localhost:5000/api/producto/:id
router.get("/:id", (req, res, next) => {
  Producto.findByPk(req.params.id).then((producto) => {
    res.status(200).send(producto);
  });
});

//CREO UNA COMIDA
router.post("/foods", (req, res, next) => {
  Producto.create(req.body).then((producto) => {
    res.status(201).send(producto);
  });
});
//CREO UNA BEBIDA
router.post("/drinks", (req, res, next) => {
  Producto.create(req.body).then((producto) => {
    res.status(201).send(producto);
  });
});

//UPDATE PUT  http://localhost:5000/api/producto/:id
router.put("/:id", (req, res, next) => {
  Producto.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  }).then((update) => {
    res.send(update);
  });
});

//MUESTRO TODOS LOS PRODUCTOS GET http://localhost:5000/api/producto


//DELETEA UNO POR ID  DELETE http://localhost:5000/api/producto/1(id)
router.delete("/:id", (req, res, next) => {
  Producto.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.sendStatus(202);
  });
});
//SEDEO
router.post("/addmany", async (req, res) => {
  try {
    const data = await Producto.bulkCreate(req.body);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
  }
});

//SEDEO
router.delete("/drinks/:id", (req, res, next) => {
  Producto.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.sendStatus(202);
  });
});
module.exports = router;
