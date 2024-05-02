import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        min:5,
        max:100
    }
})

const User = mongoose.models.User || mongoose.model("User",UsersSchema)

export default User;