const express = require("express")
const bodyparser = require("body-parser")
const route = require("./routes/route")
const mongoose = require("mongoose")
const app = express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://pc75805:Hanuman19@cluster0.xqcusr4.mongodb.net/Cloning_Quora?retryWrites=true&w=majority',{
    useNewurlParser:true
}).then(()=>{
    console.log("MongoDb is conected")
}).catch(err=>console.log(err))

app.use("/", route)


app.listen(3000)
