
import mongoose from "mongoose";

//  Create Schema for foodModel properties

const foodSchema = new mongoose.Schema({
   
    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    category: {
        type: String,
        required:true
    }

});

//  Here, give model name and schema 
//  by calling this e badha models ne call kari dei , but jo aapde koi specific model joiye depending on Schema , atle aa " OR " walu lakhvu pade

const foodModel = mongoose.models.food ||  mongoose.model("food",foodSchema);

export default foodModel;