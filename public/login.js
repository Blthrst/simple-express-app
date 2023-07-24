const express = require('express')
const {User} = require('../database.js')
const routerLogin = express.Router()

routerLogin.get('/authorize', (req, res) =>
{
    res.sendFile(__dirname + "/loginform.html")
})

routerLogin.post('/authorize', async (req, res) =>
{
    const user_email = req.body.Email
    const user_password = req.body.Password
    if (user_password && user_email)
    {
        const users = await User.findAll({where: {email: user_email, password: user_password}})
        if (users.length>0)
        {
            res.redirect('/authorized')
        }
        else{
            res.send("user doesn't exist")
        }
    }
    else{
        res.send("Incorrect input")
    }
})

module.exports = {routerLogin}