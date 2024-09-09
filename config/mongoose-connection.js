const mongoose =require('mongoose');

mongoose
.connect("mongobd://127.0.0.1:27017/shop")
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})
module.exports=mongoose.connection;