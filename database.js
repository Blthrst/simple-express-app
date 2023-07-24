const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize("users.db", "admin", "12345", {
    dialect: 'sqlite',
    storage: './users.db'
})

const User = sequelize.define("User", {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING
    }
})

User.sync()

sequelize.authenticate()
.then(console.log("DB STATUS OK"))

module.exports = {User, sequelize}