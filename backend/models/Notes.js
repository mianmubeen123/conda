const mongoose =require('mongoose');
const{Schema}=mongoose;
mongoose.connect("mongodb://localhost:27017/reactdb");
const NotesSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        required:true
    },  
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
       default:"general"
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model('udhar',NotesSchema)
