
import mongoose from "mongoose";

//  ahiya aapde Project-Name aapvanu hoi

export const connectDatabase = async () => {
    await mongoose.connect('mongodb+srv://sutharashok0711:Y9TCdtrGAGzgYDhe@cluster0.bx3co.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=> console.log("DataBase Connected"));
}

