const ratingBtns = document.querySelectorAll('.rating');

/* eslint-disable-next-line */
for (const ratingBtn of ratingBtns) {
  const itemsCollection = ratingBtn.querySelectorAll('.rating__item');
  ratingBtn.onclick = (e) => {
    const elClass = e.target.classList;
    // change the rating if the user clicks on a different star
    if (!elClass.contains('active')) {
      itemsCollection.forEach(
        // reset the active class from all stars
        (item) => item.classList.remove('active')
      );
      elClass.add('active'); // add active class to the clicked star
    }
  };
}
