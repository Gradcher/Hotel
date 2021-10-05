function createPagination(totalPages, page) {
  ulEl.innerHTML = '';

  let beforePage = page - 1;
  let afterPage = page + 1;
  const liArr = [];

  if (page > 1) {
    // show the "previous" button if the page value is greater than 1

    const liBtnPrev = document.createElement('li');

    liBtnPrev.className =
      'pagination__item pagination__item--icon pagination__item--icon--prev';
    liBtnPrev.onclick = createPagination.bind(null, totalPages, page - 1);

    liArr.push(liBtnPrev);
  }
  if (page > 2) {
    // if page value is less than 2 then add 1 after the previous button

    const liNum = document.createElement('li');

    liNum.className =
      'pagination__item pagination__item--pagination__item--numb';
    liNum.innerHTML = '<span pagination__value>1</span>';
    liNum.onclick = createPagination.bind(null, totalPages, 1);

    liArr.push(liNum);

    if (page > 3) {
      // if page value is greater than 3 then add this (...) after the first li or page

      const liDots = document.createElement('li');

      liDots.className = 'pagination__item pagination__item--dots';
      liDots.innerHTML = '<span pagination__value>...</span>';

      liArr.push(liDots);
    }
  }

  /* ------------------------------ */

  // how many pages or li show before the current li
  if (page === totalPages) {
    beforePage -= 1;
  }
  // how many pages or li show after the current li
  if (page === 1) {
    afterPage += 1;
  }

  /* ------------------------------ */

  for (let plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      continue; // if plength is greater than totalPage length then continue
    }

    const liNum = document.createElement('li');
    liNum.className = 'pagination__item pagination__item--numb';

    if (plength === 0) {
      // if plength is 0 than add +1 in plength value
      plength += 1;
    }
    if (page === plength) {
      // if page is equal to plength than assign active string in the active variable
      liNum.classList.add('pagination__item--active');
    } else {
      // else leave empty to the active variable
      liNum.classList.remove('pagination__item--active');
    }

    liNum.innerHTML = `<span pagination__value>${plength}</span>`;
    liNum.onclick = createPagination.bind(null, totalPages, plength);

    liArr.push(liNum);
  }

  /* ------------------------------ */

  if (page < totalPages - 1) {
    // if page value is less than totalPage value by -1 then show the last li or page
    if (page < totalPages - 2) {
      /* if page value is less than
      totalPage value by -2 then add this (...) before the last li or page */
      const liDots = document.createElement('li');

      liDots.className = 'pagination__item pagination__item--dots';
      liDots.innerHTML = '<span pagination__value>...</span>';

      liArr.push(liDots);
    }

    const liNum = document.createElement('li');

    liNum.className = 'pagination__item pagination__item--numb';
    liNum.innerHTML = `<span pagination__value>${totalPages}</span>`;
    liNum.onclick = createPagination.bind(null, totalPages, totalPages);

    liArr.push(liNum);
  }

  if (page < totalPages) {
    // show the "next" button if the page value is less than totalPage(15)

    const liBtnNext = document.createElement('li');

    liBtnNext.className =
      'pagination__item pagination__item--icon pagination__item--icon--next';
    liBtnNext.onclick = createPagination.bind(null, totalPages, page + 1);

    liArr.push(liBtnNext);
  }

  ulEl.prepend(...liArr); // adding li tags inside ul tag
}

const totalPages = 15;
const page = 1;

const ulEl = document.querySelector('.pagination__list');
if (ulEl !== null) {
  createPagination(totalPages, page);
}
