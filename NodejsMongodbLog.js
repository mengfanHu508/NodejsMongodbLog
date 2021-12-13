const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910508');
const express = require('express');
const ejs = require('ejs');
const app = express()
const port = 5508

const schema = {
    name: String,
    age: Number,
    health: String
}

//hello

const boy = mongoose.model('boys', schema);

// const kitty = new boy({name: 'shange', age: 8, health: 'good'});
// kitty.save()

// boy.find({name: 'shange'}, (err, data) => {console.log(data[0]._doc)});
app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    // res.send(req.query);
    console.log(req.query);
    const kitty = new boy({name: req.query.first,health:req.query.second});
    kitty.save()
    // ejs.renderFile(filename,data,options,function(err,str){

    // });
    ejs.renderFile("result.html",{returnVal:"sucess"},function(err,str){
        res.send(str);
    });

})
app.listen(port,()=>{
    console.log("hmf508")
})