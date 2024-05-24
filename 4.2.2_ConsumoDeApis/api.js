let image = document.getElementById("character-image");
let characterName = document.querySelector("#character-name");

const getData = async () => {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let data = await response.json();
        console.log(data);
        characterName.innerHTML = data.results[1].name;
        image.src = data.results[1].image;
    } catch (error) {
        console.log(error);
    }
}

getData();