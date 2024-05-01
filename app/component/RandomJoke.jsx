import getJoke from "@/utils/getJoke";


const RandomJoke = async() => {
    const joke = await getJoke()
    return (
        <div className="mt-4">
            {joke.value}
        </div>
    );
};

export default RandomJoke;