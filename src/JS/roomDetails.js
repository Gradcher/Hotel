const countReviews = () => {
  const reviews = document.querySelectorAll('.review');
  const amount = reviews.length.toString();
  const lastNum = amount[amount.length - 1];

  let result = '';

  switch (+lastNum) {
    case 1:
      result = `${amount} отзыв`;
      break;
    case 2:
    case 3:
    case 4:
      result = `${amount} отзыва`;
      break;
    default:
      // 0, 5, 6, 7, 8, 9
      result = `${amount} отзывов`;
  }

  return result;
};

const reviewAmount = document.getElementById('reviewAmount');
if (reviewAmount !== null) {
  reviewAmount.innerHTML = countReviews();
}
