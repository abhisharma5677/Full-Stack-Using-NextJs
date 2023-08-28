//To establish a collection with the mongoDB database..............

import mongoose from "mongoose"

export const connectDb = async () =>{

    try{

        const {connection} =  await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName: "form_information"
        })
        console.log("database connected....")
        console.log("connected with the host :-",connection.host);
        
    }catch{

        console.log("failed to connect")
        console.log(error)

    }
}

