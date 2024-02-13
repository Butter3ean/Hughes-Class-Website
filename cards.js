let cardDeck = document.getElementById("card-deck");

let animalPages = {
    img: "images/stock.jpg",
    url: "index.html",
  };

for (let i = 0; i < 12; i++) {
    let img = animalPages.img;
    let url = animalPages.url;
  
    let card = `
      <div class="card m-3 w-25" >
      <img src="${img}" class="card-img" />
      <div class="card-body">
      <a href="${url}">Animal Name</a>
      </div>
      </div>
      `;
  
    cardDeck.innerHTML += card;
  }