async function fetchGifs () {
    const apiKey = "HMnrn1iUQSbQ6mnhuAk3uSok5ktFQfvZ";
    const searchTerm = document.getElementById("search").value;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        displayGifs(data.data);
    } catch(error) {
        console.error("Hubo un error en su petición");
    }
}

function displayGifs(gifs){
    const gifContainer = document.getElementById("gif-container");
    gifContainer.innerHTML = "";
    gifs.forEach(gif => {
        const img = document.createElement("img");
        img.src = gif.images.fixed_height.url;
        gifContainer.appendChild(img);
    });
}
