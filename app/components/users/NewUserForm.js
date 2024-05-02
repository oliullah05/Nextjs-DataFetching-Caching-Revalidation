import { addUser } from "@/Actions/user";

 

export default function NewUserForm() {
    

    return (
        <form action={addUser}>
            <div>
                <input type="hidden" name="flag" value="Pro" />
            </div>
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
