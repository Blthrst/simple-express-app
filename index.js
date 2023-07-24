const express = require('express')
const {routerLogin} = require('./public/login')
const {routerSignup} = require('./public/signup')

const app = express()
const PORT = process.env.PORT ?? 3000

const urlencodedParser = express.urlencoded({extended: false});
const bodyParser = require('body-parser')

app.use(express.static('./public'))
app.use(urlencodedParser, routerSignup)
app.use(urlencodedParser, routerLogin)

app.get('/', (req, res) =>
{
    res.sendFile('/index.html')
})


app.get('/authorized', (req, res) =>
{
    res.send("You're our user!")
})



app.listen(PORT, () => console.log(PORT))