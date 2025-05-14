const express=require('express');
const app=express();/// create a new appilication // instance of express js application
// app.use("/",(req,res)=>{
//     console.log("hello everyone i am active");
    
// });
app.get("/user",(req,res)=>{
    console.log(req.query);
    
    res.send({
        firstname:"naman",
        lastname:"nagpal"
    });
    
});
app.post("/user",(req,res)=>{
    res.send("hello everyone 123");
    
});
app.delete("/user",(req,res)=>{
    res.send("delete from the server.");
});
app.listen(3000, ()=>{
    console.log("server is listening the port number 3000"); 
    
});