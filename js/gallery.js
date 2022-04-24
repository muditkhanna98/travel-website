gridGallery({
    selector: ".gg-box",
    darkMode: true
});

// functionality for shuffling images on the gallery page

let imagesArray = [];

for (let i = 0; i < document.querySelectorAll('.gg-box img').length; i++) {
    imagesArray.push(document.querySelectorAll('.gg-box img')[i]);
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function shuffleImages() {
    shuffle(imagesArray);
    for (let i = 0; i < imagesArray.length; i++) {
       (document.querySelector(".gg-box").appendChild(imagesArray[i]));
    }
}