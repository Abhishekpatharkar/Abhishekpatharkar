express=require("express");
app=express();
fs=require("fs");
cal=require("./calc");
bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("index.html",{root:__dirname});
    console.log("file send to response");
});

app.post("/calculate",function(req,resp){
    result=cal.addition(req.body.num1,req.body.num2);
    data=req.body.num1+""+req.body.num2+"/n";
    
    resp.send("Addition: "+result);
    console.log("Output is send to response");
});
app.listen(3000,function(){
    console.log("server started on port 3000");
});


