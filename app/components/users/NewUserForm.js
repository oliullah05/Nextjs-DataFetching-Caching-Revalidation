import { addUser } from "@/Actions/user";
import Button from "../ui/Button";

 

export default function NewUserForm() {
    

    return (
        <form action={addUser}>
   
            <div>
                <input type="text" name="name" placeholder="Name" />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" />
            </div>
            <div>
               <Button></Button>
            </div>
        </form>
    );
}
