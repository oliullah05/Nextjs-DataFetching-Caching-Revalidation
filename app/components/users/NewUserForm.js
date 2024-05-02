import { addUser } from "@/Actions/user";

 

export default function NewUserForm() {
    
const addUserWithFlag = addUser.bind(null,"Pro")
    return (
        <form action={addUserWithFlag}>
            <div>
                <input type="text" name="name" placeholder="Name" />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
