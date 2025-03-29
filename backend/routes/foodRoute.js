
import express from "express";
import { addFood , listFood , removeFood} from "../controllers/foodController.js";
import multer from "multer"   // This is used for Image Storage

/*

foodController ma logic lakhase and foodRoute ma Route's create karsu aapde ena haru.
Same will be done for user login and sign in logic, we will create userController and userRoute.js

*/

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination:"uploads",    // we have to give the file name where we store all the images.
    filename:(req,file,cb) =>{
        return cb(null,`${Date.now()}${file.originalname}`)
    } 
})

const upload = multer({storage:storage})

foodRouter.post("/add" , upload.single("image") , addFood)
foodRouter.get("/list" , listFood);
foodRouter.post("/remove" , removeFood);

export default foodRouter;