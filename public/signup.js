const express = require('express')
const {User} = require('../database.js')
const routerSignup = express.Router()

routerSignup.get('/reg', (req, res) =>
{
    res.sendFile(__dirname + '/regform.html')
})

routerSignup.post('/reg', async (req, res) =>
{
    const user_name = req.body.userName;
    const user_password = req.body.userPassword;
    const user_email = req.body.userEmail;

    if (user_name && user_password && user_email)
    {
       const user = await User.create({name: user_name, password: user_password, email: user_email})
       if (user)
       {
        res.redirect("/authorize")
       }
       else
       {
        res.send("Something went wrong...")
       }
    }
    else{
        res.redirect(400, "back")
    }
})

module.exports = {routerSignup}