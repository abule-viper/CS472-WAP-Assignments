// let express=require("express")
// let app=express()

// app.listen(3000,()=>{
//     console.log("3000 listening......")
// })

const express = require("express");
const app = express();
const path = require('path');
const ejs = require('ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.listen(3000, () => {
      console.log('Server is running on 3000')
    });

     // app.set('views', path.join(__dirname, 'templates'));
     app.get('/', function(req, res, next){ 
         res.cookie("myKey", 12);
         
    res.render(path.join(__dirname+""+'/try.html'), {list:["apple", "banana", "peach", "orange"]})
})

