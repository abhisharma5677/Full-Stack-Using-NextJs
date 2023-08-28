import { httpAxios } from "@/helper/httpHelper";

export async function addNewUser(userData){
    const result = await httpAxios.post('/api/user',userData);
    console.log("Done....")
    return result;
}


export async function getDataFromDatabase(){
    const result2 = await httpAxios.get('/api/user').then((response)=>response.data);
    return result2;
}