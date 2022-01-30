//basic step to add the library express
const express = require('express');
const app = express();
//parsing the incoming req bodies
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//for html file
app.use(express.static('public'));



//server-setup
app.listen(3000, function(){
    console.log("server started at 3000 port ");
});    

//initial-request-code
app.get("/" , (req, res)=> {
    res.send("Enter your name in the url to recieve the message");
})

//body-request-code
app.get("/body" , (req, res)=>{
    console.log(req.body);
    res.send("body success");
})    

//average of three numbers-code
app.get("/average",function(req,res){
    res.sendFile(__dirname + "/average.html");
});
app.post("/average",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var num3=Number(req.body.num3);
    var result=(num1+num2+num3)/3;
    res.send("The result of calculation is "+ result);
});

//requesting frontendtask(html)-code
app.get("/frontend",function(req,res){
    res.sendFile(__dirname + "/food.html");
});

// param-request-code
app.get("/:name" , (req, res)=> {
    res.send("Hello, " + req.params.name + '!');
    console.log(req.params);
})

