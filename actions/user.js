"use server"
import connectMongo from "@/dbConnect/connectMongo"
import User from "@/models/user"
import wait from "@/utils/wait"
import { revalidatePath,revalidateTag } from "next/cache"


export const addUser = async (formData) => {

    const name = formData.get("name")
    const email = formData.get("email");
    
    const userData = {
        name, email
    }

try{
    await connectMongo()
// add delay

await wait(4000)

    // insert into database
    await new User(userData).save()

    // revalidate user
    revalidatePath("/")
    revalidateTag()

}
catch(err){
    console.log(err);
}
}



export const getUsers = async () => {
 try{
    await connectMongo()

    const users = await User.find();
    return users;
 }
 catch(err){
    console.log(err);
}
}