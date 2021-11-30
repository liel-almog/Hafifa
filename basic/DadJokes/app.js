const jokeEl = document.querySelector("#joke");

const jokeBtn = document.querySelector("#joke-btn");

const getJoke = async () => {
    const dadJokesUrl = "https://icanhazdadjoke.com/";
    const jokeRes = await fetch(dadJokesUrl, { headers: { Accept: "application/json" } });
    if (!jokeRes.ok) {
        throw new Error("Request to dad jokes failed");
    }
    return (await jokeRes.json()).joke;
}

jokeBtn.addEventListener("click", async () => {
    const joke = await getJoke()
    jokeEl.innerText = joke
});

window.onload = async () => {
    const joke = await getJoke()
    jokeEl.innerText = joke
}