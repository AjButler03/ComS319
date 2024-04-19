/*
Andrew Butler
ajbutler@iastate.edu
april 18, 2024
*/

// read file with movies:
fetch("http://localhost:8081/listRobots")
  .then((response) => response.json())
  .then((myRobots) => loadRobots(myRobots));

function loadRobots(myRobots) {
  // find the element "col" in HTML
  var CardMovie = document.getElementById("col");

  var checkboxes = [];
  var cards = [];

  // read every movie from the array
  console.log(myRobots);
  for (var i = 0; i < myRobots.length; i++) {
    let id = myRobots[i].id;
    let name = myRobots[i].name;
    let price = myRobots[i].price;
    let desc = myRobots[i].description;
    let url = myRobots[i].imageUrl;

    // create a new HTML div division
    let AddCardMovie = document.createElement("div");

    // add class = "col" to new division for Bootstrap
    AddCardMovie.classList.add("col");

    //create bootstrap card
    AddCardMovie.innerHTML = `
          <div class="card shadow-sm">
              <img src=${url} class="card-img-top" alt="..."></img>
              <div class="card-body">
                  <p class="card-text">${id}: <strong>${name}</strong>, Price: ${price}</p>
                  <div class="d-flex justify-content-between align-items-center">
                      ${desc}
                  </div>
              </div>
          </div>
          `;

    //append new division
    CardMovie.appendChild(AddCardMovie);

    // console.log(checkbox);
    // console.log(card);
  }

  // console.log(checkboxes);
  // console.log(cards);

  checkboxes.forEach((checkboxParam, index) => {
    // console.log(index);
    checkboxParam.addEventListener("change", () => {
      if (checkboxParam.checked) {
        cards[index].style.display = "block"; // show card
      } else {
        cards[index].style.display = "none"; // hide card
      }
    });
  });
}

function getRobot() {
  let id = document.forms["my_form"]["robotID"];
  let inputID = id.value;

  fetch("http://localhost:8081/" + inputID)
    .then((response) => response.json())
    .then((myRobot) => loadRobots(makecard(myRobot)));

  function makecard(myRobot) {
    var mainContainer = document.getElementById("col");

    id = myRobot.id;
    let name = myRobot.name;
    let price = myRobot.price;
    let desc = myRobot.description;
    let url = myRobot.imageUrl;

    let division = document.createElement("div");

    division.innerHTML = `
    <div class="card shadow-sm">
    <img src=${url} class="card-img-top" alt="..."></img>
    <div class="card-body">
        <p class="card-text">${id}: <strong>${name}</strong>, Price: ${price}</p>
        <div class="d-flex justify-content-between align-items-center">
            ${desc}
        </div></div></div>`;
    mainContainer.appendChild(division);
  }
}

function newRobot() {
  fetch("http://localhost:8081/addRobot", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: 4,
      name: "Andrew",
      price: "20.03",
      description: "Incredibly tired of web development",
      imageUrl: "https://robohash.org/Andrew",
    }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function deleteOneRobot() {
  // Fetch the value from the input field
  let id = document.getElementById("deleteRobotById").value;
  console.log(id);
  fetch(`http://localhost:8081/deleteRobot/${id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ id: id }),
  })
    .then((response) => response.json())
    .then((deleteThisRobot) => {
      // I don't know what this function is or supposed to be; it's not in the slides
      // Really appreciate the completeness of he slides; it's probably on par with the completeness of my grandma's memory
      // deleteOneRobotById(deleteThisRobot);
    });
}

function updateOneRobot() {
  // Fetch the value from the input field
  let id = document.getElementById("updateRobotById").value;
  console.log(id);
  fetch(`http://localhost:8081/updateRobot/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: "Andrew Butler",
      price: 100.9,
      description: "laskdjflkasdlfkjasdf",
      imageUrl: "https://robohash.org/Andrew_Butler",
    }),
  })
    .then((response) => response.json())
    .then((updateThisRobot) => {
      // Once again, a function not defined by the slides. Cool.
      // I'll just comment it out, because I do not care
      // updateOneRobotById(updateThisRobot);
    });
}
