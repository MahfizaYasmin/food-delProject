import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mahfizayasmin:foodDel123@cluster0.f7aqsud.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}