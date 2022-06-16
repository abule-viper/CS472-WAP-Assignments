const express = require("express");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);



let data ={};
let stat=0;


app.get("/", (req,res) => {
   res.sendFile(__dirname  + "/form.html")
   stat++;
})

app.post("/Add", (req , res)=>{
    console.log(req.body);
    data=req.body;   
    console.log(data)
    res.redirect("/view");
});

app.get("/view",(req,res) => {
  res.send(
   "<label>Input1: " +
     data.input1 +
     "</label>" +
     "<br>" +
     "<label>Radio: " +
     data.radio1 +
     "</label>" +
     "<br>" +
     "<label>Checkbox: " +
     data.checkbox1 +
     "</label>" +
     "<br>" +
     "<label>Selected Value: " +
     data.selectedValue +
     "</label>" +
     "<br>" +
     "<label>Text Area: " +
     data.textArea +
     "</label>"
     +"<label>UserCount: " +
     stat +
     "</label>"
 );
})


app.use((req, res,next) => {
   res.sendFile(__dirname + "/notfound.html")


  })




app.listen(3000, () => {
   console.log('Your Server is running on 3000');
   })
 