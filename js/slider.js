let offset = 0; // зміщення від лівого краю
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider__next').addEventListener('click', function () {
  offset += 90;
  if (offset > 360) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider__back').addEventListener('click', function () {
  offset -= 90;
  if (offset < 0) {
    offset = 360;
  }
  sliderLine.style.left = -offset + 'px';
});
