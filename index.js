const { json } = require("body-parser");
const express = require("express");

const app = express();
const books = {
    book1:"HTML",
    book2:"CSS",
    book3:"JavaScript",
    book4:"React"
}
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/books",(req,res)=>{
    res.send(books)
})



app.listen(3000,(err)=>{
    if(err){
        console.log("Something went wrong");
    }
    else{
        console.log("running on port 3000")
    }

})
