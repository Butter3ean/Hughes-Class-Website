let cardDeck = document.getElementById("card-deck");

let animalPages = [{
    img: "https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-Namibia.jpg",
    url: "StudentSites/Lion/Lions.html",
    animalName: 'Lion'
  },
  {
    img: "https://www.tristatehomepage.com/wp-content/uploads/sites/92/2022/09/red-panda-2.jpg?w=1280",
    url: "StudentSites/Red-Panda/Red-Panda.html",
    animalName: 'Red Panda'
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Saltwater_crocodile.jpg/220px-Saltwater_crocodile.jpg",
    url: "StudentSites/Saltwater-Crocodile/Saltwater-Crocodile.html",
    animalName: 'Saltwater Crocodile'
  },
  {
    img: "https://marinesanctuary.org/wp-content/uploads/2020/03/MBNMS-SouthernSeaOtter-BigFlippers-DouglasCroft-700x700.jpg",
    url: "StudentSites/Sea-Otters/SeaOtters.html",
    animalName: 'Sea Otter'
  },
  {
    img: "https://cdn.britannica.com/80/157580-004-FFB75F13.jpg",
    url: "StudentSites/Squirrel/Squirrels.html",
    animalName: 'Common Squirrel'
  },
  {
    img: "https://a-z-animals.com/media/animals/images/original/siberian_tiger.jpg",
    url: "StudentSites/Tiger/Panthera-Tiger.html",
    animalName: 'Panthera Tiger'
  },
  {
    img: "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg",
    url: "StudentSites/webpage/Capybaras.html",
    animalName: 'Capybara'
  },
  {
    img: "https://media.wired.com/photos/59326eb044db296121d6afc3/master/w_2560%2Cc_limit/Gator-2.jpg",
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