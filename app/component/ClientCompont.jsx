"use client"

import getJoke from "@/utils/getJoke";

const ClientCompont = () => {
const joke = getJoke();

    const getAlert = ()=>{
        alert("55555")
      }
    return (
        <div>
            <h1  className="m-auto w-max text-3xl">{joke.value}</h1>
        </div>
    );
};

export default ClientCompont;