const express = require("express");
const Favoritos = require("../models/Favoritos");
const router = express.Router();


router.get('/', async (req, res) => {
    const favoritos = await Favoritos.findAll();
    res.send(favoritos);
  });
  
  router.post('/', async (req, res) => {
    const favorito = await Favoritos.create({ nombre: req.body.nombre });
    res.send(favorito);
  });
  
  router.put('/:id', async (req, res) => {
    const favorito = await Favoritos.findByPk(req.params.id);
    await favorito.update({ nombre: req.body.nombre });
    res.send(favorito);
  });
  
  router.delete('/:id', async (req, res) => {
    const favorito = await Favoritos.findByPk(req.params.id);
    await favorito.destroy();
    res.send();
  });  


 module.exports = router