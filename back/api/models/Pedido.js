const S = require("sequelize");
const db = require("../config/index");


class Pedido extends S.Model{}

Pedido.init({

},{ sequelize: db, modelName: "pedidos" })

module.exports = Pedido