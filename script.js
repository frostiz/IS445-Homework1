const pics = [
    'images/cat1.jpg',
    'images/cat2.jpg',
    'images/cat3.png',
    'images/cat4.jpg',
];
const btn = document.getElementById('btn-next-photo');
const img = document.getElementById('cat-image');

let idx = 0;

btn.addEventListener('click', function() {
    idx += 1;
    if (idx >= pics.length)
        idx = 0;
    img.src = pics[idx];
});

const images = [];

function preloadImage() {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preloadImage.arguments[i];
    }
}

preloadImage(...pics);