const S = require("sequelize");
const db = require("../config/index");

class Producto extends S.Model {}
Producto.init(
  {
    tittle: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    drink: {
      type: S.BOOLEAN,
    },
    food: {
      type: S.BOOLEAN,
    },

    description: {
      type: S.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: S.DECIMAL,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    stock: {
      type: S.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
      defaultValue: 0,
    },
    image: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "producto" }
);

module.exports = Producto;
