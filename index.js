const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req,res,next)=>{
try{
    let obj = { name:"Gaurav",
    age:"27",
    State:"Delhi"
   }
   res.status(200).json(obj);
}
catch(error)
{
   res.status(400).json({message:error.message})
}
})

app.listen(3000,(()=>{
    console.log("Application is listening on port 3000");
}))