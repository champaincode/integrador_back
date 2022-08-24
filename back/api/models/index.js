const Producto = require("./Producto");
const User = require("./User");
const Cart = require("./Cart")

Cart.belongsTo(Producto)
Producto.hasMany(Cart)

User.belongsToMany(Producto,{ through: "fav"});
Producto.belongsToMany(User,{ through: "fav"})



Cart.belongsTo(User)
User.hasMany(Cart)

module.exports = { User, Producto, Cart };
