const range = document.getElementById('sliderRangeBetween');

const sliderOne = document.getElementById('rangeLeft');
const sliderTwo = document.getElementById('rangeRight');
const sliderMaxValue = document.getElementById('rangeLeft').max;

const displayValOne = document.getElementById('rangeValueLeft');
const displayValTwo = document.getElementById('rangeValueRight');
// const minGap = 0; // min interval between first and second buttons

function slideOne() {
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

function slideTwo() {
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

document.addEventListener('DOMContentLoaded', slideOne);
document.addEventListener('DOMContentLoaded', slideTwo);

sliderOne.addEventListener('input', slideOne);
sliderTwo.addEventListener('input', slideTwo);
