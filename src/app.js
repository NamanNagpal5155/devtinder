const express=require('express');
const app=express();/// create a new appilication // instance of express js application
// app.use("/",(req,res)=>{
//     console.log("hello everyone i am active");
    
// });
app.use("/hello",(req,res)=>{
    console.log("hello everyone");
    
});
app.use((req,res)=>{
    res.send("hello from the server.");
});
app.listen(3000, ()=>{
    console.log("server is listening the port number=3000"); 
    
});/// port number =3000