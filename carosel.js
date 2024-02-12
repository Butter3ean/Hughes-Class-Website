
let animalGifs = ['\images\penguins.gif', '\images\manatee.gif', '\images\monkey.gif']

let slideIndex = 0;
const header = getElementById('header');

function carousel() {
    if (slideIndex > animalGifs.length - 1) {
        slideIndex = 0;
    }

    header.style.backgroundImage = `url(${animalGifs[slideIndex]})`;
    slideIndex++;
    
    setTimeout(carousel, 2000);
}

carousel();
