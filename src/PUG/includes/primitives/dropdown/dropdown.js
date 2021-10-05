function changeResultText(
  dropdown,
  amountEl,
  amountNum,
  dropdownOriginalResultText,
  arrResultValues,
  changeAmountBtn
) {
  const dropdownResultTextEl = dropdown.querySelector('.dropdown__result-txt');

  const titleEl = amountEl.closest(
    '.dropdown__amount-block'
  ).previousElementSibling;
  const titleText = titleEl.innerHTML;

  let declinedWord = '';
  let resultValue = '';

  const currentDropdownItemTitle =
    changeAmountBtn.parentElement.previousElementSibling.innerHTML;

  if (dropdown.classList.contains('dropdown--type--rooms')) {
    switch (amountNum) {
      case 1:
        if (/спал/i.test(titleText)) {
          declinedWord = `${amountNum} ${titleText
            .toLowerCase()
            .match(/спал/i)}ьня`;
        } else if (/кроват/i.test(titleText)) {
          declinedWord = `${amountNum} ${titleText
            .toLowerCase()
            .match(/кроват/i)}ь`;
        } else {
          const doubleWordArr = titleText.split(' ');
          declinedWord += `${amountNum} ${doubleWordArr[0]
            .toLowerCase()
            .match(/ванн/i)}ая `;
          declinedWord += `${doubleWordArr[1].toLowerCase().match(/комнат/i)}а`;
        }
        break;
      case 2:
      case 3:
      case 4:
        if (/спал/i.test(titleText)) {
          declinedWord = `${amountNum} ${titleText.toLowerCase()}`;
        } else if (/кроват/i.test(titleText)) {
          declinedWord = `${amountNum} ${titleText.toLowerCase()}`;
        } else {
          declinedWord = `${amountNum} ${titleText.toLowerCase()}`;
        }
        break;
      default:
        //  from 5 to 10
        if (/спал/i.test(titleText)) {
          declinedWord = `${amountNum} ${titleText
            .toLowerCase()
            .match(/спал/i)}ен`;
        } else if (/кроват/i.test(titleText)) {
          declinedWord = `${amountNum} ${titleText
            .toLowerCase()
            .match(/кроват/i)}ей`;
        } else {
          const doubleWordArr = titleText.split(' ');
          declinedWord += `${amountNum} ${doubleWordArr[0]
            .toLowerCase()
            .match(/ванн/i)}ых `;
          declinedWord += `${doubleWordArr[1].toLowerCase().match(/комнат/i)}`;
        }
    }

    arrResultValues.push([changeAmountBtn, declinedWord]);

    if (arrResultValues.length > 1) {
      for (let i = 0; i < arrResultValues.length - 1; i++) {
        const prevDropdownItemTitle =
          arrResultValues[i][0].parentElement.previousElementSibling.innerHTML;

        if (currentDropdownItemTitle === prevDropdownItemTitle) {
          arrResultValues[i] = [changeAmountBtn, declinedWord];
          arrResultValues.splice(i, 1);

          if (amountNum === 0) {
            arrResultValues.pop();

            if (arrResultValues.length === 0) {
              resultValue = dropdownOriginalResultText;
            }
          }
        }
      }
    }

    const onlyTextValues = [];
    arrResultValues.forEach((element) => onlyTextValues.push(element[1]));

    resultValue = onlyTextValues.join(', ');
  } else {
    if (changeAmountBtn.classList.contains('dropdown__amount-btn--plus')) {
      arrResultValues.push(currentDropdownItemTitle);
    } else {
      arrResultValues.pop();
    }
    const guestAmount = arrResultValues.length;

    switch (guestAmount) {
      case 0:
        resultValue = dropdownOriginalResultText;
        break;
      case 1:
        resultValue = `${guestAmount} гость`;
        break;
      case 2:
      case 3:
      case 4:
        resultValue = `${guestAmount} гостя`;
        break;
      default:
        // from 5 to 10
        resultValue = `${guestAmount} гостей`;
    }
  }

  dropdownResultTextEl.innerHTML = resultValue;
}

function changeValue(
  dropdown,
  amountEL,
  oppositeChangeAmountBtn,
  dropdownOriginalResultText,
  arrResultValues,
  e
) {
  let amountNum = parseInt(amountEL.innerHTML);
  const changeAmountBtn = e.target;

  if (changeAmountBtn.classList.contains('dropdown__amount-btn--minus')) {
    amountEL.innerHTML = `${(amountNum -= 1)}`;
    changeResultText(
      dropdown,
      amountEL,
      amountNum,
      dropdownOriginalResultText,
      arrResultValues,
      changeAmountBtn
    );

    if (amountEL.innerHTML <= 0) {
      changeAmountBtn.classList.add('dropdown__amount-btn--non-active');
    } else {
      changeAmountBtn.classList.remove('dropdown__amount-btn--non-active');
      oppositeChangeAmountBtn.classList.remove(
        'dropdown__amount-btn--non-active'
      );
    }
  } else {
    amountEL.innerHTML = `${(amountNum += 1)}`;
    changeResultText(
      dropdown,
      amountEL,
      amountNum,
      dropdownOriginalResultText,
      arrResultValues,
      changeAmountBtn
    );

    if (amountEL.innerHTML >= 10) {
      changeAmountBtn.classList.add('dropdown__amount-btn--non-active');
    } else {
      changeAmountBtn.classList.remove('dropdown__amount-btn--non-active');
      oppositeChangeAmountBtn.classList.remove(
        'dropdown__amount-btn--non-active'
      );
    }
  }
}

function clearDropdown(
  dropdown,
  dropdownAmountBlocks,
  dropdownOriginalResultText,
  arrResultValues,
  e
) {
  const dropdownResultTextEl = dropdown.querySelector('.dropdown__result-txt');
  dropdownResultTextEl.innerHTML = dropdownOriginalResultText;

  arrResultValues.splice(0, arrResultValues.length); // array cleanup

  /* eslint-disable-next-line */
  for (const i of dropdownAmountBlocks) {
    const minusBtn = i.firstElementChild;
    const plusBtn = i.lastElementChild;
    const amountEL = i.querySelector('.dropdown__amount-numb');
    amountEL.innerHTML = '0';

    if (amountEL.innerHTML <= 0) {
      minusBtn.classList.add('dropdown__amount-btn--non-active');
    } else {
      minusBtn.classList.remove('dropdown__amount-btn--non-active');
    }

    if (amountEL.innerHTML >= 10) {
      plusBtn.classList.add('dropdown__amount-btn--non-active');
    } else {
      plusBtn.classList.remove('dropdown__amount-btn--non-active');
    }
  }
}

function goThroughDropdownValues() {
  const dropdowns = document.querySelectorAll('.dropdown');

  if (dropdowns !== null) {
    /* eslint-disable-next-line */
    for (const dropdown of dropdowns) {
      const dropdownOriginalResultText = dropdown.querySelector(
        '.dropdown__result-txt'
      ).innerHTML;

      const dropdownAmountBlocks = dropdown.querySelectorAll(
        '.dropdown__amount-block'
      );

      const dropdownBtnClear = dropdown.querySelector(
        '.btn--type--dropdown-btn-clear'
      );
      const arrResultValues = [];

      if (dropdownBtnClear !== null) {
        dropdownBtnClear.addEventListener(
          'click',
          clearDropdown.bind(
            null,
            dropdown,
            dropdownAmountBlocks,
            dropdownOriginalResultText,
            arrResultValues
          )
        );
      }

      /* eslint-disable-next-line */
      for (const i of dropdownAmountBlocks) {
        const minusBtn = i.firstElementChild;
        const plusBtn = i.lastElementChild;
        const amountEL = i.querySelector('.dropdown__amount-numb');

        if (amountEL.innerHTML <= 0) {
          minusBtn.classList.add('dropdown__amount-btn--non-active');
        } else {
          minusBtn.classList.remove('dropdown__amount-btn--non-active');
        }

        if (amountEL.innerHTML >= 10) {
          plusBtn.classList.add('dropdown__amount-btn--non-active');
        } else {
          plusBtn.classList.remove('dropdown__amount-btn--non-active');
        }

        minusBtn.onclick = changeValue.bind(
          null,
          dropdown,
          amountEL,
          plusBtn,
          dropdownOriginalResultText,
          arrResultValues
        );

        plusBtn.onclick = changeValue.bind(
          null,
          dropdown,
          amountEL,
          minusBtn,
          dropdownOriginalResultText,
          arrResultValues
        );
      }

      const dropdownHeader = dropdown.querySelector('.dropdown__header');
      dropdownHeader.addEventListener('click', (e) => {
        dropdown.classList.toggle('dropdown--active');
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', goThroughDropdownValues);
