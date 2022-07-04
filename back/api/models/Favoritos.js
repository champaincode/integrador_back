const S = require("sequelize");
const db = require("../config/index");


class Favorito extends S.Model{}

Favorito.init({


},{ sequelize: db, modelName: "favoritos" })

module.exports = Favorito