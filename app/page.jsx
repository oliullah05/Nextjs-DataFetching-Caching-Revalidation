import getJoke from "@/utils/getJoke";
import RandomJoke from "./component/RandomJoke";
import RandomJokeClient from "./component/RandomJokeClient";
export const revalidate =10;
export default async function Home() {
  const joke = await getJoke()

  return (
   <div className="h-screen w-screen text-3xl bg-blue-100 flex justify-center items-center">
       <h1  className="m-auto w-max text-3xl">{joke.value}</h1>
       <RandomJoke></RandomJoke>
       <RandomJokeClient></RandomJokeClient>
   </div>
  );
}
