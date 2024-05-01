

export default async function getJoke(){
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    return res.json()
}