const express=require("express")
const router= express.Router()
const Reservas=require("./reservas")
const Users=require("./users")
const Admin=require("./admin")
const Cart=require("./cart")
const Producto=require("./producto")


router.use("/users",Users )
 router.use("/cart",Cart)
router.use("/reservas",Reservas)
router.use("/producto",Producto)
router.use("/admin",Admin )



module.exports = router