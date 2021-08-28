const likeBtns = document.querySelectorAll('.like-btn');

/* eslint-disable-next-line */
for (const likeBtn of likeBtns) {
  likeBtn.onclick = function () {
    const likeAmountEl = likeBtn.querySelector('.like-btn__amount');
    let likeAmountNum = Number(likeAmountEl.innerHTML);

    if (likeBtn.classList.contains('like-btn--active')) {
      likeAmountEl.innerHTML = likeAmountNum -= 1;
    } else {
      likeAmountEl.innerHTML = likeAmountNum += 1;
    }

    likeBtn.classList.toggle('like-btn--active');
  };
}
