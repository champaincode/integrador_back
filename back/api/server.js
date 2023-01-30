const path = require("path")
const express = require('express')
const errorHandler = require('./Middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require("./config/index")
const router = require("./routes/index")
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000
const User = require("./models/User")

app.use(cors())


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())



app.use("/api", router);

db.sync({ force: false })
  .then(() => {
    console.log("db conectada perfectamente");
    app.listen(PORT, function () {
      console.log(`Server is connected on ${PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
