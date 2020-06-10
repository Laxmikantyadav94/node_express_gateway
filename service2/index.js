var  express = require('express');

const app = express();


app.get("/test",(req,res) =>{
    res.end("response from service 2");
})


app.listen(9002);
console.log("server startd on 9002");
