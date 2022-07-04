const S = require("sequelize");
const db = require("../config/index");


class Pedido extends S.Model{}

Pedido.init({

//USER_ID 
},{ sequelize: db, modelName: "pedidos" })

module.exports = Pedido