let cardDeck = document.getElementById("card-deck");

let animalPages = [{
    img: "images/stock.jpg",
    url: "StudentSites/Lion/Lions.html",
    animalName: 'Lion'
  },
  {
    img: "images/stock.jpg",
    url: "StudentSites/Red-Panda/Red-Panda.html",
    animalName: 'Red Panda'
  },
  {
    img: "images/stock.jpg",
    url: "StudentSites/Saltwater-Crocodile/Saltwater-Crocodile.html",
    animalName: 'Saltwater Crocodile'
  },
  {
    img: "images/stock.jpg",
    url: "StudentSites/Sea-Otters/SeaOtters.html",
    animalName: 'Sea Otter'
  },
  {
    img: "images/stock.jpg",
    url: "StudentSites/Squirrel/Squirrels.html",
    animalName: 'Common Squirrel'
  },
  {
    img: "images/stock.jpg",
    url: "StudentSites/Tiger/Panthera-Tiger.html",
    animalName: 'Panthera Tiger'
  },
  {
    img: "images/stock.jpg",
    url: "StudentSites/webpage/Capybaras.html",
    animalName: 'Capybara'
  },
  {
    img: "images/stock.jpg",
    url: "StudentSites/aligator.html",
    animalName: 'Alligator'
  },
];

for (const page of animalPages) {
    let img = page.img;
    let url = page.url;
    let name = page.animalName;
  
    let card = `
      <div class="card m-4" style='max-width:15rem;' >
      <img src="${img}" class="card-img" />
      <div class="card-body">
      <a href="${url}">${name}</a>
      </div>
      </div>
      `;
  
    cardDeck.innerHTML += card;
  }