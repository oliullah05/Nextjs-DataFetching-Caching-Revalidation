export default async function getJoke(){
    const res = await fetch('https://api.chucknorris.io/jokes/random',{
        next:{
            tags:["get-joke"]
        }
    })


    return res.json()
}