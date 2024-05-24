let image = document.getElementById("character-image");
let characterName = document.querySelector("#character-name");
let button = document.querySelector("#random");

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const getData = async () => {
    try {
        let numeroAleatorio = getRandomInt(0, 800);
        let response = await fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`);
        let data = await response.json();
        console.log(data);
        characterName.innerHTML = data.name;
        image.src = data.image;
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener("click", () => getData())