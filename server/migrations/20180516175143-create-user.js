module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
     
      user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      first_name: { 
        type: Sequelize.STRING,
         allowNull: false 
      },
      other_name: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
      surname: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
      email: {
        type: Sequelize.STRING(320),
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
      },
      password: { type: Sequelize.TEXT("long") },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface /*, Sequelize*/) => queryInterface.dropTable("users"),
};
