/*
    Andrew Butler
    Feb 23, 2024
    Activity08
*/

fetch("./ajbutler_Activity08_MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    var mainContainer = document.getElementById("goodmovies");

    for (var i = 0; i < myMovies.movies.length; i++) {
        let title = myMovies.movies[i].title;
        let year = myMovies.movies[i].year;
        let url = myMovies.movies[i].url;

        console.log(title);

        let division = document.createElement("div");

        division.innerHTML = `
            <h3>${title}</h3>

            ${year} <br>

            <img src=${url} width="200"> <br><br>
            `;
        mainContainer.appendChild(division);
    }
}
