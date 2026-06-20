const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const images = [
    "https://picsum.photos/id/64/700/400",
    "https://picsum.photos/id/0/700/400",
    "https://picsum.photos/id/152/700/400",
    "https://picsum.photos/id/36/700/400",
    "https://picsum.photos/id/92/700/400",
    "https://picsum.photos/id/240/700/400",
    "https://picsum.photos/id/99/700/400",
    "https://picsum.photos/id/49/700/400"
];

let index = 0;

// Display the current image
function showImage() {
    slider.src = images[index];
}

// Next Button
next.addEventListener("click", () => {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage();
});

// Previous Button
prev.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    showImage();
});

// Auto Slide Every 3 Seconds
setInterval(() => {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage();
}, 3000);

// Show first image when page loads
showImage();