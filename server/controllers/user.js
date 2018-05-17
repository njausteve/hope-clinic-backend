const User = require('../models').user;
const hash = require('../utility/hash');


// TODO: deciede where the parameters values come from : and implement
module.exports = {
  create(userToCreate) {
    
      return User
        .create({
          first_name: userToCreate.first_name,
          other_name: userToCreate.other_name,
          surname: userToCreate.surname,
          email: userToCreate.email,
          password: hash.hashPassword(userToCreate.password)
        })
        // .then(user; => res.status(201).send(todo))
        // .catch(error => res.status(400).send(error));

        .then(user=>console.log(user))
        .catch(err => console.error('error creating user', err));
    },

  list(){

  return User
    .findAll()
    // .then(todos => res.status(200).send(todos))
    // .catch(error => res.status(400).send(error));


    .then(user=>console.log(user))
    .catch(err => console.error('Error fetching all users', err));

  },
  
  getPassword(userEmail){

  if(userEmail.length <= 0 ){
       
     throw "Email needed to fetch hash";

  }else{

    return User  
    .findAll({
      where: {
        email: userEmail
      }
    })

    .then(user=>user[0].password)
    .catch(err => console.error('Error fetching password hash', err));

  }

 

  }

  };
