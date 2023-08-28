import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name:String,
    email:String,
    message:String,
    myFile:String,
})

export const User = mongoose.models.users || mongoose.model("users" , UserSchema);

