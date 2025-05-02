const express = require("express");
const app = express();
const PORT = 4000;

const db = require("./config/db")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname+"/public"))

const routes=require("./routes/apiRoutes")
app.use("/api",routes)

app.get("/",(req,res)=>{
    res.send("Its my home page");
});






app.listen(PORT, (err) => {
    if (err) { console.log(err); }
    else { console.log(`Server is starting on port: http://localhost:${PORT}`); }
});