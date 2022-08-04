let images = document.querySelectorAll('.infinity-slider__img');
let current = 0;

function slider() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('opacity');
  }

  images[current].classList.remove('opacity');
}
slider();

// document.querySelector('.infinity-slider__slider-line').onclick = slider;
document.querySelector('.infinity-slider__btns--up').onclick = function () {
  if (current - 1 == -1) {
    current = images.length - 1;
  } else {
    current--;
  }
  slider();
};

document.querySelector('.infinity-slider__btns--down').onclick = function () {
  if (current + 1 == images.length) {
    current = 0;
  } else {
    current++;
  }
  slider();
};
