const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const User = require('./models/user')
require('./db/mongoose')


const app = express()

const port = process.env.PORT || 3000

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.json())

// Setting a Template engine.
app.set("view engine",'hbs')
app.set('views',path.join(__dirname,'../templates/views'))
hbs.registerPartials(path.join(__dirname,'../templates/partials'))

// Telling where to get static data from
app.use(express.static(path.join(__dirname,'../public')))


app.get('',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/register', urlencodedParser, (req,res)=>{
    // render instead of send. the first argument is a view existing in views, the second item is content to be dynamically rendered
    console.log(req.body)
    const user = new User(req.body)
    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
    
})

app.get('/register',(req,res)=>{
    // render instead of send. the first argument is a view existing in views, the second item is content to be dynamically rendered
    res.render('register')
})



app.get('*',(req,res)=> {
    res.send('Error 404')
})


app.listen(port,()=> {
    console.log('Server up on Port'+port)
})