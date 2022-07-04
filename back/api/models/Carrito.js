const S = require("sequelize");
const db = require("../config/index");


class Carrito extends S.Model{}

Carrito.init({


},{ sequelize: db, modelName: "carritos" })

module.exports = Carrito