const S = require("sequelize");
const db = require("../config/index");

class Reserva extends S.Model {}

Reserva.init(
  {
    Fecha: {
      type: S.INTEGER,
      validate: {
        isNumeric: true,
        isDate: true,
      },
    },
    Hora: {
      type: S.INTEGER,
      validate: {
        isNumeric: true,
      },
    },
    Comentarios: {
      type: S.STRING,
    },
    
  },
  { sequelize: db, modelName: "reservas" }
);

module.exports = Reserva;
