const express = require ('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(express.static(path.join(__dirname,'public')))
//app.set('view engine','ejs');
//
//app.get("/",function(req,res){
//res.render("script")//render means view
//})


app.get("/profile/:username/:age",function(req,res){
    res.send(`Hii my name is  ${req.params.username}and I am ${req.params.age}`)
})

app.listen(3000,function(){
    console.log("mast chal reha hai ")
}) 