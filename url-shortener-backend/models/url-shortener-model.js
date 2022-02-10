const {Schema,model} = require('mongoose');



const urlSchema = new Schema({
    full:{
        type:String,
        required:true,
        unique:true
    },
    short:{
        type:String,
        required:true
    },
    clicks:{
        type:Number,
        default:0
    }

},{
    collection:"url"
});


const urlModel = model('urlModel',urlSchema);

module.exports={
    urlModel
}