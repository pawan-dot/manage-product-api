const mongoose = require("mongoose");
const url="mongodb://localhost:27017/manage-product";
mongoose.connect(url, {
    //useCreateIndex:true,
    //useNewUrlParser:true,
    //useUnifieldTopology:true
}).then(()=>{
    console.log("connection done");
    })