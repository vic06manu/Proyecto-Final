import express from "express";
const app = express();

app.get("/", (req, res) =>{
    res.send("Api run");
});
app.listen(5000,console.log("server run port 5000"));
