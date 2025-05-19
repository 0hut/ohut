
const slider = document.querySelector('.slider');
let currentBox = 0;
let startX = 0;
let isDown = false;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', (e) => {
    isDown = false;
    const endX = e.pageX - slider.offsetLeft;
    if (endX < startX) {
        currentBox = (currentBox + 1) % 5;
    } else if (endX > startX) {
        currentBox = (currentBox - 1 + 5) % 5;
    }
    slider.style.transform = `translateX(${-currentBox *170}px)`;
});

slider.addEventListener('mousemove', (e) => {
    if (isDown) {
        // Optional: add some drag effect here
    }
});

// Touch events for mobile devices
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
});

slider.addEventListener('touchend', (e) => {
    isDown = false;
    const endX = e.changedTouches[0].pageX - slider.offsetLeft;
    if (endX < startX) {
        currentBox = (currentBox + 1) % 5;
    } else if (endX > startX) {
        currentBox = (currentBox - 1 + 5) % 5;
    }
    slider.style.transform = `translateX(${-currentBox * 170}px)`;
});

slider.addEventListener('touchmove', (e) => {
    if (isDown) {
        // Optional: add some drag effect here
    }
});