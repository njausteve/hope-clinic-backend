
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        first_name: { type: DataTypes.STRING, allowNull: false },
        other_name: { type: DataTypes.STRING, allowNull: false },
        surname: { type: DataTypes.STRING, allowNull: false },
        email: {
            type: DataTypes.STRING(320),
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },
        password: { type: DataTypes.TEXT("long"), allowNull: false }
    }, {});

    User.associate = function (models) {
    // associations can be defined here
    };
    return User;
};