
import express from "express"
import cors from "cors"
import { connectDatabase } from './config/db.js'
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//  app config

const app = express();
const port = process.env.PORT || 4000;

//  middleware

app.use(express.json())
app.use(cors(
   {
    origin : ["http://localhost:5174"],
    methods : ["POST","GET"],
    credentials : true
   }
))

//  Database Connection

connectDatabase();

//  api endpoints

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))   //  By writing this now we can access to the images that will be upload later on.
app.use("/api/user" , userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order" , orderRouter)


//  app methods

app.get("/", (req,res) => {
    res.send("Server Working");
}) 

app.listen(port, ()=>{
    console.log(`Server is started on http://localhost:${port}`);
});

