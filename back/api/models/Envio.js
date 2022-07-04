const S = require("sequelize");
const db = require("../config/index");


class Envio extends S.Model{}

Envio.init({


},{ sequelize: db, modelName: "envios" })

module.exports = Envio