const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {urlModel:model} = require('./models/url-shortener-model');

mongoose.connect("mongodb://localhost/url-shortener",{
    useUnifiedTopology:true,
    useNewUrlParser:true
});



app.listen(process.env.PORT||8080,()=>{
    console.log("Server listening on",process.env.PORT||8080);
})