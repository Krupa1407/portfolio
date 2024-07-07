import express from "express";
import cors from "cors";
import "./db/config.js";
import Contactme from "./db/Contactme.js";


const app = express();
app.use(cors());
app.use(express.json());



app.post('/', async(req, res) => {
    let contactme = new Contactme(req.body);
    let result = await contactme.save();
    res.send(result);
});



const port = 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})