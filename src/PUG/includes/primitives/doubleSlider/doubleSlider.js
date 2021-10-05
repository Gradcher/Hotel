function slideOne(sliderOne, sliderTwo, displayValOne, sliderMaxValue, range) {
  sliderOne.value = Math.min(
    parseInt(sliderOne.value),
    parseInt(sliderTwo.value)
  ); // doesn't allow the first button go beyond the second one

  /* You can do the above code looks like this:

  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }

  It will do absolutely the same thing */

  displayValOne.textContent = sliderOne.value;
  const percent = (sliderOne.value / sliderMaxValue) * 100;
  range.style.left = `${percent}%`;
}

function slideTwo(sliderTwo, sliderOne, displayValTwo, sliderMaxValue, range) {
  sliderTwo.value = Math.max(
    parseInt(sliderOne.value),
    parseInt(sliderTwo.value)
  ); // doesn't allow the second button go beyond the first one

  /* You can do the above code looks like this:

  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }

  It will do absolutely the same thing */

  displayValTwo.textContent = sliderTwo.value;
  const percent = (sliderTwo.value / sliderMaxValue) * 100;
  range.style.right = `${100 - percent}%`;
}

function loadSlider() {
  const sliders = document.querySelectorAll('.slider');

  if (sliders !== null) {
    /* eslint-disable-next-line */
    for (const slider of sliders) {
      const range = slider.querySelector('.slider__range-between');

      const sliderOne = slider.querySelector('.slider__range-input--left');
      const sliderTwo = slider.querySelector('.slider__range-input--right');
      const sliderMaxValue = sliderOne.max;

      const displayValOne = slider.querySelector(
        '.slider__range-value-item--left'
      );
      const displayValTwo = slider.querySelector(
        '.slider__range-value-item--right'
      );
      // const minGap = 0; // min interval between first and second buttons

      sliderOne.addEventListener(
        'input',
        slideOne.bind(
          null,
          sliderOne,
          sliderTwo,
          displayValOne,
          sliderMaxValue,
          range
        )
      );
      sliderTwo.addEventListener(
        'input',
        slideTwo.bind(
          null,
          sliderTwo,
          sliderOne,
          displayValTwo,
          sliderMaxValue,
          range
        )
      );

      slideOne(sliderOne, sliderTwo, displayValOne, sliderMaxValue, range);
      slideTwo(sliderTwo, sliderOne, displayValTwo, sliderMaxValue, range);
    }
  }
}

document.addEventListener('DOMContentLoaded', loadSlider);
