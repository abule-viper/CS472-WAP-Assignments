let express=require("express")
let app=express()
app.use(express.json());
app.use(
    express.urlencoded({
      extended: false,
    })
  );

app.listen(3000,()=>{
    console.log("3000 listening......")
})

app.use((req,res,next)=>{
   
    
    next()
})

app.get("/",(req,res)=>{
  
res.sendFile(__dirname+"/form.html");

})
data={}
app.post('/Add',(req,res)=>{
    data=req.body
    console.log(data)
})
app.use((req,res)=>{
    res.sendFile(__dirname+"/notfound.html")
})