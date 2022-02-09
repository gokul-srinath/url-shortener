const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const {urlModel:model} = require('./models/url-shortener-model');
const { nanoid } = require('nanoid')

mongoose.connect("mongodb://localhost/url-shortener",{
    useUnifiedTopology:true,
    useNewUrlParser:true
});

app.use(express.json());

app.use(cors({
    origin:'http://localhost:3000'
}));

app.post("/create",async (req,res)=>{

    try {
        const {url} = req.body;
        const short = nanoid();
        await model.create({full:url,short:short});
        res.send({status:"ok",message:JSON.stringify({full:url,short:short})});
    } catch (error) {
        res.send({status:'error',message:error.message})
    }

})

app.get("/urls",async (req,res)=>{

    try {
       
        const urls = await model.find();
        console.log(urls)
        res.send({status:"ok",message:JSON.stringify(urls)});
    } catch (error) {
        res.send({status:'error',message:error.message})
    }

})


app.get("/:url",async (req,res)=>{

    try {
        let url = req.params.url;
        const {full,clicks} = await model.findOne({short:url});

        await model.updateOne(
            {short:url},
            {
                $set:{
                    clicks:clicks+1,
                }
            }
        );

        res.redirect(full);
    } catch (error) {
        res.send({status:'error',message:error.message})
    }

})


app.listen(process.env.PORT||8080,()=>{
    console.log("Server listening on",process.env.PORT||8080);
})