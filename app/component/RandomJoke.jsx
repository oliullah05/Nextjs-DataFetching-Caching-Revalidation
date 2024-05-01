import getJoke from "@/utils/getJokeAxios";


const RandomJoke = async() => {
    const joke = await getJoke()
    return (
        <div className="mt-4">
            {joke.data.value}
        </div>
    );
};

export default RandomJoke;