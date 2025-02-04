const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm))
}

function displayResults(result, searchTerm) {
    resultPlaylist.classList.add("hidden");
    const gridContainer = document.querySelector('.grid-container');

    // Limpa o conteúdo anterior
    gridContainer.innerHTML = '';

    if (result.length === 0) {
        resultArtist.classList.add('hidden');
        resultPlaylist.classList.remove('hidden');
        return;
    }

    result.forEach(element => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        const cardImg = document.createElement('div');
        cardImg.classList.add('card-img');

        const artistImg = document.createElement('img');
        artistImg.classList.add('artist-img');
        artistImg.src = element.urlImg;
        artistImg.alt = element.name;

        const play = document.createElement('div');
        play.classList.add('play');
        play.innerHTML = '<span class="fa fa-solid fa-play"></span>';

        cardImg.appendChild(artistImg);
        cardImg.appendChild(play);

        const cardText = document.createElement('div');
        cardText.classList.add('card-text');

        const artistName = document.createElement('span');
        artistName.classList.add('artist-name');
        artistName.innerText = element.name;

        const artistCategorie = document.createElement('span');
        artistCategorie.classList.add('artist-categorie');
        artistCategorie.innerText = 'Artista';

        cardText.appendChild(artistName);
        cardText.appendChild(artistCategorie);

        artistCard.appendChild(cardImg);
        artistCard.appendChild(cardText);

        gridContainer.appendChild(artistCard);
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }
    
    requestApi(searchTerm);
});