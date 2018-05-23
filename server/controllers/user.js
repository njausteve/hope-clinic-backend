const User = require("../models").user;
const hash = require("../utility/hash");


// TODO: deciede where the parameters values come from : and implement
module.exports = {
    create(req, res) {

        return User
            .create({
                first_name: req.body.first_name,
                other_name: req.body.other_name,
                surname: req.body.surname,
                email: req.body.email,
                password: hash.hashPassword(req.body.password)
            })
            .then(user => {
                res.status(201).send({ message: `${user.first_name} created`})
            })
            .catch(error => res.status(400).send({ error: error.message }));
          
    },

    list() {

        return User
            .findAll()
        // .then(todos => res.status(200).send(todos))
        // .catch(error => res.status(400).send(error));


            .then(user => console.log(user))
            .catch(err => console.error("Error fetching all users", err));

    },

    getPassword(userEmail) {

        if (userEmail.length <= 0) {

            throw "Email needed to fetch hash";

        } else {

            return User
                .findAll({
                    where: {
                        email: userEmail
                    }
                })
                .then(user => user[0].password)
                .catch(err => console.error("Error fetching password hash", err));
        }
    }

};
