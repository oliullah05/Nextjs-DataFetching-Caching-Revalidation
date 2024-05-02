"use server"
import connectMongo from "@/dbConnect/connectMongo"
import User from "@/models/user"
export const addUser = async(formData)=>{

    const name = formData.get("name")
    const email =formData.get("email")
    const userData = {
        name,email
    }

    await connectMongo()
    // insert into database
    await new User(userData).save()
}