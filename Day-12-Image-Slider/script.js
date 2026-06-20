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

function showImage(){
    slider.src = images[index];
}

next.addEventListener("click",()=>{
    index++;
    if(index >= images.length){
        index = 0;
    }

    showImage();
});

prev.addEventListener("click",()=>{
    index--;
    if (index < 0) {
        index = 0
    }
});

setInterval(()=>{
    index++;
    if (index >= images.length) {
        index = 0 ;
    }
    showImage();
},3000)