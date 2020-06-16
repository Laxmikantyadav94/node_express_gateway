var  express = require('express');

const app = express();


app.get("/test",(req,res) =>{
    res.json("response from service 1 test1 _copy");
})

app.get("/test2",(req,res) =>{
    res.json("response from service 1 test2 _copy");
})


app.listen(9002);
console.log("server startd on 9002");
