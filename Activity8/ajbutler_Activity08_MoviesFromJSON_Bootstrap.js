/*
Andrew Butler
Feb 23, 2024
Activity08
*/


// read file with movies: 
fetch("./ajbutler_Activity08_MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    // find the element "col" in HTML
    var CardMovie = document.getElementById("col");

    var checkboxes = [];
    var cards = [];

    // read every movie from the array
    for (var i = 0; i < myMovies.movies.length; i++) {
        let title = myMovies.movies[i].title;
        let year = myMovies.movies[i].year;
        let url = myMovies.movies[i].url;
        let checkbox = "checkbox" + i.toString();
        let card = "card" + i.toString();

        // create a new HTML div division
        let AddCardMovie = document.createElement("div");

        // add class = "col" to new division for Bootstrap
        AddCardMovie.classList.add("col");

        //create bootstrap card
        AddCardMovie.innerHTML = `

        <input type="checkbox" id=${checkbox} class="form-check-input" checked>
        
        <!--Note: this says i+1 so that the cards start at 1, not 0.-->
        <label for=${checkbox} class="form-check-label">Show Image ${i + 1}</label>

        <div id=${card} class="card shadow-sm">
            <img src=${url} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p class="card-text"><strong>${title}</strong>, ${year}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <!--removed buttons-->
                </div>
            </div>
        </div>
        `;

        //append new division
        CardMovie.appendChild(AddCardMovie);

        let cbox = document.getElementById(checkbox);
        checkboxes.push(cbox);

        let ccard = document.getElementById(card);
        cards.push(ccard);

        // console.log(checkbox);
        // console.log(card);
    }

    // console.log(checkboxes);
    // console.log(cards);

    checkboxes.forEach((checkboxParam, index) => {
        // console.log(index);
        checkboxParam.addEventListener('change', () => {
            if (checkboxParam.checked) {
                cards[index].style.display = 'block'; // show card
            } else {
                cards[index].style.display = 'none'; // hide card
            }
        });
    });
}