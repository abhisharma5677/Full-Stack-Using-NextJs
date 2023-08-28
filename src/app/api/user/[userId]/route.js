import { NextResponse } from "next/server";
import {User} from '@/models/user';


//API for Getting the information of the single user.........
export async function GET(request , {params}){

    try{
        
        const {userId} = params;
        const singleUserData = await User.findById(userId);
        return NextResponse.json(singleUserData,{
            message:"user information got successfully"
        })

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Information didn't get because of some error !!"
        })
    }

}


//API for Updating the information of the single user...........
export async function PUT(request , {params}){

    try{

        const {userId} = params;
        const{name , email , message} = await request.json();

        let oldUserInfo = await User.findById(userId);

        oldUserInfo.name = name;
        oldUserInfo.email = email;
        oldUserInfo.message = message;

        const updatedUserInfo = await oldUserInfo.save();
        return NextResponse.json(updatedUserInfo);

    }catch(error){

        console.log(error);
        return NextResponse.json({
            message:"Error in updating user information !!",
        })

    }

}


//API for Deleting the information of the particular User..........
export async function DELETE(request , {params}){

    try{

        const {userId} = params;
        const deletedUser =  await User.findById(userId);
        return NextResponse.json(deletedUser,{
            message:"user deleted successfully...."
        })

    }catch(error){
        console.log(error);
        return NextResponse({
            message:"error in deleting a single user"
        })
    }
}