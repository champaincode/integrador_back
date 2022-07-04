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
        len: [3, 30],
      },
    },
    descriptions: {
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
    thumbnail: {
      type: S.STRING,
      validate: {
        isUrl: true,
      },
    },
    image: {
      type: S.ARRAY(S.STRING),
    },
   
  },
  { sequelize: db, modelName: "productos" }
);

module.exports = Producto;
