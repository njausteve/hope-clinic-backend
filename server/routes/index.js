const userController = require("../controllers").users;

module.exports = app => {
    app.get("/api", (req, res) =>
        res.status(200).send({ message: "Welcome to the clinic backend API" })
    );
 
    app.post("/api/register", userController.create);
   
};



