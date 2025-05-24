import searchMusic from "./Controllers/searchMusic.js";
import downloadMusic from "./Controllers/downloadMusic.js";
import express from "express"
import bodyParser from "body-parser";
import cors from "cors"

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", (req,res)=>{
    res.send("Disko Backend");
});

app.post("/search", async (req,res)=>{
    const searchText = req.body.searchText
    const result = await searchMusic(searchText);
    res.json(result);
});

app.post("/download", async (req, res)=>{
    const url = req.body.url;
    const result = await downloadMusic(url);
    res.json(result[0]);
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})