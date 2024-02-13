
let animalGifs = ['images/penguins.gif', 'images/manatee.gif', 'images/monkey.gif']

let slideIndex = 0;
const header = document.getElementById('heading')

function carousel() {
    if (slideIndex > animalGifs.length - 1) {
        slideIndex = 0;
    }

    header.style.backgroundImage = `url(${animalGifs[slideIndex]})`;
    header.style.transition = "background-image 1.5s"
    slideIndex++;
}

function startCarosel() {
    carousel()
    setInterval(carousel, 1500)
}

startCarosel();
