
import express from "express";
import config from "config";
import "./dbconnect.js";
const app = express();
const port = config.get("PORT");
app.use(express.json());
app.listen(port, () => {
    console.log(`server started at ${port}`);
});



app.use("/", async (req, res) => {
    try {
        
        let c=25
        res.send(`${c}`)
    } catch (error) {

    }
});
