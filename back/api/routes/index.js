const express=require("express")
const router= express.Router()
const Reservas=require("./reservas")
const Users=require("./users")
const Admin=require("./admin")
const Cart=require("./cart")
const Producto=require("./producto")

const Favoritos =require("./favoritos")

 
router.use("/users",Users )
router.use("/cart",Cart)
router.use("/favorites", Favoritos)
router.use("/reservas",Reservas)
router.use("/producto",Producto)
router.use("/admin",Admin )




module.exports = router