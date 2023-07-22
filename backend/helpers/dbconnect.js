const mongoose=require('mongoose')


const connect=()=>{
    try{
        mongoose.connect("mongodb://0.0.0.0:27017/ecommerce")
        console.log("conncted")
    }
    catch(error){
        console.log("erreur")
    }
}
module.exports=connect