const S = require("sequelize");
const db = require("../config/index");


class Categoria extends S.Model{}

Categoria.init({


},{ sequelize: db, modelName: "categorias" })

module.exports = Categoria