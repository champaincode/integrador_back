const express = require('express');
const cors = require("cors");
const morgan = require('morgan')
const db = require("./config/index");
const router = require("./routes");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("./models/User");


const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(sessions({ secret: "bootcamp" }));
app.use(morgan('dev'))
app.use(passport.initialize());
app.use(passport.session());



passport.use(
  new localStrategy(
    { usernameField: "email", passwordField: "password" },
    function (email, password, done) {
      User.findOne({ where: { email } }).then((user) => {
        if (!user) {
          return done(null, false);c
        }
        user.hash(password, user.salt).then((hash) => {
          //rehashea el password y comparamos con el primer hasheo hecho en models
          if (hash !== user.password) {
            return done(null, false); // si la contraseña no coincide
          }

          return done(null, user); // si la contraseña no coincide devuelve el usuario
        });
      })
      .catch(done)
    }
  
  )
);

passport.serializeUser(function (user,done){
  done(null,user.id)
})

passport.deserializeUser(function (id,done) {
  User.findByPk(id).then((user) => {
    done(null,user)
  })
  .catch(done)

  
})







app.use("/api", router);



db.sync({force:false})
.then(() => {
  console.log("db conectada perfectamente")
  app.listen(5000, function() {
  console.log('La app está corriendo en el puerto 5000.');
  });
}) .catch((err) => {
  console.log(err);
});

