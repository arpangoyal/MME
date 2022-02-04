const mongoose=require('mongoose');
const {db_link}=require('../secrets.js')
// const validator = require("email-validator");
mongoose.connect(db_link).then(function(db){
    // console.log(db);
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
});

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    Phone:{
        type:Number
    },
    E_mail:{
        type:String,
        required:true,
        // unique:true,
        // validate:function(){
        //     return validator.validate(this.email);
        // }
    },
    Farm_Location:{
        type:String,
        required:true,
    },
    Area_Cultivation:{
        type:Number,
        required:true,
    },
    category:{
        type:Array,
        required:true,
    },
    crop_info:{
        type:Array,
        required:true,
    },
    
});

// userSchema.pre('save',function(){
//     this.confirmPassword=undefined;
// });

const userModel=mongoose.model('userModel',userSchema);

module.exports=userModel;

