
import foodModel from "../models/foodModel.js";
import fs from 'fs';  // File-System


//  add food item
/**   aa food item ni properties define kari didhi aapde ahiya in " addFood ", this is just Schema for adding any food item,
      then niche aapde eni badhi properties define karsu like " finding , deleting , adding , updating  " food item 
      in the database. 

      And " foodRoute " aanu ek route banavi didhu 
  
      Aa badhi method na data nu function banai ne aapde pachi ene foodRoute ma aapi daiye. 
 */

const addFood = async (req,res) => {
    
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category,
        image : image_filename

    })
    
    try {
       await food.save();
       res.json({success:true , message:"Food Added"})  
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"}) 
    } 
}

//  add all foodList " or " show all the food list from database. 

const listFood = async(req,res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success:true, data:foods});
    }
    catch (error) {
        console.log(error);
        res.json({success:false, data:Error});
    }
}


//   remove food item

const removeFood  = async(req,res) => {

    try{
        const food =  await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}` , ()=>{} );    // This will delete the image from the file-System.

        await foodModel.findByIdAndDelete(req.body.id);  // This will delete the rest of information apart from image.
        res.json({success:true, message:"Food Removed"});
    }

    catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }

}

export { addFood , listFood , removeFood };
