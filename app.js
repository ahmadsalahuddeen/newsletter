const express = require("express");
const request = require("request");
const app = express(); 
const PORT = 5000;

app.use(express.static('public'));  
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res )=>{ 
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (res)=>{
  console.log( res.body.email);
})





app.listen(PORT, ()=>{
console.log('server started at http://localhost:'+ PORT +'/');
});