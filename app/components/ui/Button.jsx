"use client"
import {useFormStatus} from "react-dom"
const Button = () => {
    const {pending} =useFormStatus()
    return (
        <div>
             <button disabled={pending} type="submit">{pending? "Submiting":"Submit"}</button>
        </div>
    );
};

export default Button;