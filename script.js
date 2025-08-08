const express=require ('express')

const app = express()

app.use(function(req,res,next){
console.log("middlware runns")  ;
next();

})


app.get('/', (req, res) => {
res.send('Hello  wow World')
})


app.get('/name',(req,res)=>{
    res.send("My name is Manu not hello chauhan")
})



app.listen(3000)