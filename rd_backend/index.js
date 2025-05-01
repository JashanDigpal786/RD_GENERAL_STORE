const express = require("express");
const app = express();
const PORT = 4000;

const db = require("./config/db")

app.get("/",(req,res)=>{
    res.send("Its my home page");
});






app.listen(PORT, (err) => {
    if (err) { console.log(err); }
    else { console.log(`Server is starting on port: http://localhost:${PORT}`); }
});