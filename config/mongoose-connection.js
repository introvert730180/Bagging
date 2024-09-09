const mongoose =require('mongoose');
const dbr =require("debug")("development:mongoose");
mongoose
.connect("mongodb://127.0.0.1:27017/shop")
.then(function(){
    dbr("connected");
    console.log("connected");
})
.catch(function(err){
    dbr(err);
    console.log(err);

});
module.exports=mongoose.connection;