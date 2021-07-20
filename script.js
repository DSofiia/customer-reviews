let offset = 0;
const sliderLine = document.querySelector('.customer-reviews_slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 926;
    if (offset >1852) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 926;
    if (offset < 0) {
        offset = 1852;
    }
    sliderLine.style.left = -offset + 'px';
});