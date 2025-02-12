import axios from "axios";
import express from "express";


const app = express();

app.listen(3000,()=>{
    console.log("Server Started Successfully");
})
app.use(express.static("public"))
app.get("/",async (req,res)=>{
    try {
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        console.log(response.data);
        res.render("index.ejs",{data:response.data})
        
    } catch (error) {
        console.log(error.message)
    }
})