const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

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

app.post('/register',(req,res)=>{
    // render instead of send. the first argument is a view existing in views, the second item is content to be dynamically rendered
    res.render('register')
})

app.get('/register',(req,res)=>{
    // render instead of send. the first argument is a view existing in views, the second item is content to be dynamically rendered
    res.render('register')
})



app.get('*',(req,res)=> {
    res.send('Error 404')
})


app.listen(3000,()=> {
    console.log('Server up on Port 3000')
})