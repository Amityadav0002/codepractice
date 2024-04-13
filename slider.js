const slides = document.querySelectorAll(".slide"); // Use querySelectorAll to select elements by class name
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`; // Corrected interpolation syntax
}); 
const slideimage = () => {
    if (counter >= 0 && counter < slides.length) {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    }
};

const pre = () => {
    if (counter > 0) {
        counter--;
        slideimage();
    }
};

const next = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideimage();
    }
};
