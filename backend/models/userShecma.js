const mongoose=require('mongoose')


const userShcema=mongoose.Schema({
    name:{type:String,},
    email:{type:String,unique:true},
    password:{type:String},
    imgLink:{type:String}
})
const User=mongoose.model('user',userShcema)
module.exports=User