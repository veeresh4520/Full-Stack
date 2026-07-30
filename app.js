const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("FULL STACK WEB DEVELOPMENT");
});
app.post("/sensor", (req, res) => {
    console.log(req.body);
    res.send("Sensor Data Received");
});
app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});