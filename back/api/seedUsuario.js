const Sequelize = require('sequelize');
const User = require('./models/User');
const bcrypt = require('bcrypt');



const users = [
    {
        firstname: "Emiliano",
        lastname: "Martínez",
        email: "Dibu@hotmail.com",
        password: "Dibu10",
        isAdmin: false,
      },
    
      {
        firstname: "Sergio",
        lastname: "Aguero",
        email: "kunaguero@mail.com",
        password: "Aguero10",
        isAdmin: false,
      },
      {
        firstname: "Rodrigo",
        lastname: "De Paul",
        email: "RodriDePaul@outlook.com",
        password: "Rodrigo10",
        isAdmin: false,
      },
      {
        firstname: "Ángel",
        lastname: "Di María",
        email: "Ángelito@maiil.com",
        password: "Ángel10",
        isAdmin: false,
      },
      {
        firstname: "Paulo",
        lastname: "Dybala",
        email: "Dybala@qatar.com",
        password: "Dybala10",
        SisAdmin: false,
      },
    
      {
        firstname: "Lautaro",
        lastname: "Martínez",
        email: "Lautaro@lautamail.com",
        password: "Lautaro10", 
        isAdmin: false,
      },
      {
        firstname: "Marcos",
        lastname: "Acuña",
        email: "Marcos@mailmar.com",
        password: "Marcos10",
        isAdmin: false,
      },
      {
        firstname: "Leandro",
        lastname: "Paredes",
        email: "Leandro@leamail.com",
        password: "Leandro10",
        isAdmin: false,
      },
      {
        firstname: "Lisandro",
        lastname: "Martínez",
        email: "Lisandro@lisamail.com",
        password: "Lisandro10",
        isAdmin: false,
      },
      {
        firstname: "Lio",
        lastname: "Messi",
        email: "liomessi@qatar2022.com",
        password: "Messi10",
        isAdmin: true,
      },
  ];





  const saltRounds = 10;
  const usersWithHashedPasswords = users.map(user => {
      const salt = bcrypt.genSaltSync(saltRounds);
      user.password = bcrypt.hashSync(user.password, salt);
      return user;
  });
  
  User.bulkCreate(usersWithHashedPasswords)
    .then(() => {
      console.log('Usuarios agregados correctamente');
    })
    .catch((error) => {
      console.log(error);
    });



module.exports = User;
