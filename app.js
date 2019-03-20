const express=require('express');
const hbs=require('hbs');
var app=express();
// setting template engine
app.set('view engine','hbs');

// setting routers
app.get('/',(req,res)=>{      
    res.render('index.hbs')

});
app.get('/home',(req,res)=>{
    res.send("<h1>welcome to home page</h1>")
});
app.get('/contact',(req,res)=>{
    res.send('welcome to my contact page')
});
app.listen(3000);