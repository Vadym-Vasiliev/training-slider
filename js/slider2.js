let active = 0;
const images = document.querySelectorAll('.slider-2__img');

document.querySelector('.slider-2__btn').onclick = () => {
  images[active].classList.remove('active');

  if (active + 1 == images.length) {
    active = 0;
  } else {
    active++;
  }

  images[active].classList.add('active');
};
