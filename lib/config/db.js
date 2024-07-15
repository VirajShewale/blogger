import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://virajshewale:3j7bM7DcnUfveYfH@cluster0.c2pvozd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/blog-app');
    console.log("DB connected");
}