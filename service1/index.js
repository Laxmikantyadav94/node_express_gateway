var  express = require('express');

const app = express();


app.get("/test",(req,res) =>{
    res.json("response from service 1 test1");
})

app.get("/test2",(req,res) =>{
    res.json("response from service 1 test2");
})


app.listen(9001);
console.log("server startd on 9001");
