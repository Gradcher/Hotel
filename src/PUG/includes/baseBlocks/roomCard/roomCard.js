/* https://medium.com/@claudiaconceic/infinite-plain-javascript-slider-click-and-touch-events-540c8bd174f2 */
const sliderContainer = document.querySelector('.room-card__slider');
const sliderTrack = document.querySelector('.room-card__slider-track');
const sliderDots = document.querySelector('.room-card__slider-dots');

const btnPrev = document.querySelector(
  '.room-card__slider-btn.room-card__slider-btn--left'
);
const btnNext = document.querySelector(
  '.room-card__slider-btn.room-card__slider-btn--right'
);

function slide(sliderContainer, sliderTrack, sliderDots, btnPrev, btnNext) {
  const slides = sliderTrack.querySelectorAll('.room-card__slider-item');
  const dots = sliderDots.querySelectorAll('.room-card__slider-dot');
  const slidesLength = slides.length;

  const slideSize = sliderContainer.clientWidth;
  slides.forEach((item) => {
    item.style.minWidth = `${slideSize}px`;
  });

  const firstSlide = slides[0];
  const lastSlide = slides[slidesLength - 1];

  const cloneFirst = firstSlide.cloneNode(true);
  const cloneLast = lastSlide.cloneNode(true);

  let posInitial;
  let index = 0;
  let dotIndex = slidesLength - 1;
  let allowShift = true;

  // Clone first and last slide
  sliderTrack.appendChild(cloneFirst);
  sliderTrack.insertBefore(cloneLast, firstSlide);
  sliderTrack.style.left = `-${slideSize}px`;

  btnPrev.addEventListener('click', () => {
    shiftSlide(-1);
  });
  btnNext.addEventListener('click', () => {
    shiftSlide(1);
  });

  btnPrev.addEventListener('click', () => {
    shiftDot(-1);
  });
  btnNext.addEventListener('click', () => {
    shiftDot(1);
  });

  sliderTrack.addEventListener('transitionend', checkIndex);

  function shiftDot(el) {
    dotIndex += el;

    if (slidesLength > dotIndex) {
      dots[slidesLength - 1].classList.add('room-card__slider-dot--active');
      dots[0].classList.remove('room-card__slider-dot--active');

      dotIndex += slidesLength;
      /* slidesLength > dotIndex - condition for the element thast is out of
      slidesLength from left */
      // for back <- transferring from start to end
    } else if (slidesLength * 2 - 1 < dotIndex) {
      dots[0].classList.add('room-card__slider-dot--active');
      dots[slidesLength - 1].classList.remove('room-card__slider-dot--active');

      dotIndex -= slidesLength;
      /* slidesLength * 2 - 1 < dotIndex - condition for the element thast is out of
      slidesLength from right */
      // for forward -> transferring from end to start
    } else {
      dots[Math.abs(dotIndex % slidesLength)].classList.add(
        'room-card__slider-dot--active'
      );
      dots[Math.abs((dotIndex % slidesLength) - el)].classList.remove(
        'room-card__slider-dot--active'
      );
    }
  }

  shiftDot(1);

  function shiftSlide(dir, action) {
    sliderTrack.classList.add('shifting');

    if (allowShift) {
      if (!action) {
        posInitial = sliderTrack.offsetLeft;
      }

      if (dir === 1) {
        sliderTrack.style.left = `${posInitial - slideSize}px`;
        index++;
      } else if (dir === -1) {
        sliderTrack.style.left = `${posInitial + slideSize}px`;
        index--;
      }
    }

    allowShift = false;
  }

  function checkIndex() {
    sliderTrack.classList.remove('shifting');

    if (index === -1) {
      sliderTrack.style.left = `${-(slidesLength * slideSize)}px`;
      index = slidesLength - 1;
    }

    if (index === slidesLength) {
      sliderTrack.style.left = `${-(1 * slideSize)}px`;
      index = 0;
    }

    allowShift = true;
  }
}

slide(sliderContainer, sliderTrack, sliderDots, btnPrev, btnNext);
