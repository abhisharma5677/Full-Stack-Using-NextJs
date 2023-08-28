import { connectDb } from "../../../helper/db";
import { NextResponse } from "next/server";
import {User} from "@/models/user"

connectDb();


//API to get information about all the users.....
export async function GET(request){
    let userData = [];
    try{

        userData = await User.find();
        return NextResponse.json(userData,{
            message:"Data get successfully...",
            status:201,
        }) 
        console.log("Get API called successfully.....")

    }catch(error){

        console.log(error);
        return NextResponse.json({
            message:"Error in get request !!",
        })

    }

}


//Create User in the database........
export async function POST(request){

    try{

        const {name , email , message , myFile} = await request.json();

        const newUser = new User({
            name,
            email,
            message,
            myFile,
        }) 

        const createUser = await newUser.save();

        console.log("Post API called succesfully...")

        return NextResponse.json(createUser,{
            status:201
        })

    }catch(error){
        console.log(error);

        return NextResponse.json({
            message:"failed to create task...",
            success:false,
        })
    }

}