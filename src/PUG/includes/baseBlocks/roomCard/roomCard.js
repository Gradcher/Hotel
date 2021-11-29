/* Infinite pure Javascript slider — https://medium.com/@claudiaconceic/infinite-plain-javascript-slider-click-and-touch-events-540c8bd174f2 */

const roomCatalog = [
  {
    id: 'roomCard-1',
    images: [
      'assets/IMG/hotel-rooms/image.jpg',
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image-3.jpg',
      'assets/IMG/hotel-rooms/image-1.jpg',
    ],
    roomNumber: 888,
    luxRoom: true,
    roomDayPrice: 9990,
    starAmount: 5,
    reviewAmount: 145,
    link: 'roomDetails.html',
  },
  {
    id: 'roomCard-2',
    images: [
      'assets/IMG/hotel-rooms/image-1.jpg',
      'assets/IMG/hotel-rooms/image.jpg',
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image-3.jpg',
    ],
    roomNumber: 840,
    luxRoom: false,
    roomDayPrice: 9990,
    starAmount: 4,
    reviewAmount: 65,
    link: 'roomDetails.html',
  },
  {
    id: 'roomCard-3',
    images: [
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image.jpg',
      'assets/IMG/hotel-rooms/image-3.jpg',
      'assets/IMG/hotel-rooms/image-1.jpg',
    ],
    roomNumber: 980,
    luxRoom: true,
    roomDayPrice: 8500,
    starAmount: 3,
    reviewAmount: 35,
    link: 'roomDetails.html',
  },
  {
    id: 'roomCard-4',
    images: [
      'assets/IMG/hotel-rooms/image-3.jpg',
      'assets/IMG/hotel-rooms/image.jpg',
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image-1.jpg',
    ],
    roomNumber: 856,
    luxRoom: false,
    roomDayPrice: 7300,
    starAmount: 5,
    reviewAmount: 19,
    link: 'roomDetails.html',
  },
  {
    id: 'roomCard-5',
    images: [
      'assets/IMG/hotel-rooms/image-4.jpg',
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image-3.jpg',
      'assets/IMG/hotel-rooms/image-1.jpg',
    ],
    roomNumber: 740,
    luxRoom: false,
    roomDayPrice: 6000,
    starAmount: 4,
    reviewAmount: 44,
    link: 'roomDetails.html',
  },
  {
    id: 'roomCard-6',
    images: [
      'assets/IMG/hotel-rooms/image-5.jpg',
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image-3.jpg',
      'assets/IMG/hotel-rooms/image-1.jpg',
    ],
    roomNumber: 982,
    luxRoom: false,
    roomDayPrice: 5800,
    starAmount: 3,
    reviewAmount: 56,
    link: 'roomDetails.html',
  },
  {
    id: 'roomCard-7',
    images: [
      'assets/IMG/hotel-rooms/image-6.jpg',
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image-3.jpg',
      'assets/IMG/hotel-rooms/image-1.jpg',
    ],
    roomNumber: 678,
    luxRoom: false,
    roomDayPrice: 5500,
    starAmount: 5,
    reviewAmount: 45,
    link: 'roomDetails.html',
  },
  {
    id: 'roomCard-8',
    images: [
      'assets/IMG/hotel-rooms/image-7.jpg',
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image-3.jpg',
      'assets/IMG/hotel-rooms/image-1.jpg',
    ],
    roomNumber: 450,
    luxRoom: false,
    roomDayPrice: 5300,
    starAmount: 4,
    reviewAmount: 39,
    link: 'roomDetails.html',
  },
  {
    id: 'roomCard-9',
    images: [
      'assets/IMG/hotel-rooms/image-8.jpg',
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image-3.jpg',
      'assets/IMG/hotel-rooms/image-1.jpg',
    ],
    roomNumber: 350,
    luxRoom: false,
    roomDayPrice: 5000,
    starAmount: 3,
    reviewAmount: 77,
    link: 'roomDetails.html',
  },
  {
    id: 'roomCard-10',
    images: [
      'assets/IMG/hotel-rooms/image-9.jpg',
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image-3.jpg',
      'assets/IMG/hotel-rooms/image-1.jpg',
    ],
    roomNumber: 666,
    luxRoom: false,
    roomDayPrice: 5000,
    starAmount: 5,
    reviewAmount: 25,
    link: 'roomDetails.html',
  },
  {
    id: 'roomCard-11',
    images: [
      'assets/IMG/hotel-rooms/image-10.jpg',
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image-3.jpg',
      'assets/IMG/hotel-rooms/image-1.jpg',
    ],
    roomNumber: 444,
    luxRoom: false,
    roomDayPrice: 5000,
    starAmount: 3,
    reviewAmount: 15,
    link: 'roomDetails.html',
  },
  {
    id: 'roomCard-12',
    images: [
      'assets/IMG/hotel-rooms/image-11.jpg',
      'assets/IMG/hotel-rooms/image-2.jpg',
      'assets/IMG/hotel-rooms/image-3.jpg',
      'assets/IMG/hotel-rooms/image-1.jpg',
    ],
    roomNumber: 352,
    luxRoom: false,
    roomDayPrice: 5000,
    starAmount: 3,
    reviewAmount: 55,
    link: 'roomDetails.html',
  },
];

class RoomCatalogPage {
  #getRoomCardsArr = [];

  get getRoomCards() {
    return this.#getRoomCardsArr;
  }

  constructor(roomCatalog, roomList) {
    this._roomCatalog = roomCatalog;
    this._roomList = roomList;
  }

  // eslint-disable-next-line class-methods-use-this
  #slide(sliderContainer, sliderTrack, sliderDots, btnPrev, btnNext) {
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
    /* How does "transitionend" event work?

    When time duration of the transition property go to the end after moving to any slide then "checkIndex" function launch.
    If the slide we moved to is the last/first(I talk about "addition" one's) then we delete the ".shifting" class responsible for transition duration".
    It allows us quickly move to the real last(from the first addtion slide)/first slide(from the last addtion slide) */

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
        dots[Math.abs(dotIndex % slidesLength)].classList.add('room-card__slider-dot--active');
        dots[Math.abs((dotIndex % slidesLength) - el)].classList.remove('room-card__slider-dot--active');
      }
    }

    shiftDot(1);

    function shiftSlide(dir, action) {
      sliderTrack.classList.add('room-card__slider-track--shifting');

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
      sliderTrack.classList.remove('room-card__slider-track--shifting');

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

  // eslint-disable-next-line class-methods-use-this
  get render() {
    let roomCatalogList = '';

    this._roomCatalog.forEach((element) => {
      const sliderImagesArr = element.images;
      let sliderImagesList = '';
      let sliderDotsList = '';
      let ratingStars = '';

      sliderImagesArr.forEach((slide) => {
        sliderImagesList += `
        <li class="room-card__slider-item">
          <img class="room-card__slider-image" src="${slide}" alt="${element.id}" />
        </li>
        `;
        sliderDotsList += '<li class="room-card__slider-dot"></li>';
      });

      let i = 1;
      while (i <= 5) {
        if (element.starAmount == i) {
          ratingStars += `<li class="rating__item active" data-rate="${i++}"></li>`;
        } else {
          ratingStars += `<li class="rating__item" data-rate="${i++}"></li>`;
        }
      }

      roomCatalogList = `<div class="room-card" id="${element.id}">
      <div class="room-card__slider">
        <a class="room-card__slider-link" href="${element.link}">
            <ul class="room-card__slider-track">
                ${sliderImagesList}
            </ul>
        </a>
          <div class="room-card__slider-buttons">
              <button class="room-card__slider-btn room-card__slider-btn--left" type="button"></button>
              <button class="room-card__slider-btn room-card__slider-btn--right" type="button"></button>
          </div>
          <ul class="room-card__slider-dots">
              ${sliderDotsList}
          </ul>
      </div>
      <a class="room-card__info" href="${element.link}">
          <div class="room-card__info-title-wrap">
              <div class="room-card__info-room-number-wrap">
                  <h1 class="room-card__info-title">${element.roomNumber}</h1>
                  <span class="room-card__info-type">${element.luxRoom ? 'люкс' : ''}</span>
              </div>
              <span class="room-card__info-day-price">
                  <b class="room-card__info-day-price room-card__info-day-price--highlighted">
                      ${element.roomDayPrice}₽
                  </b>
                  в сутки
              </span>
          </div>
          <div class="room-card__info-line"></div>
          <div class="room-card__info-review">
              <ul class="rating">
                  ${ratingStars}
              </ul>
              <span class="room-card__day-price">
                  <b class="room-card__day-price room-card__day-price--highlighted"> ${element.reviewAmount} </b>
                  Отзывов
              </span>
          </div>
      </a>
  </div>`;

      this._roomList.insertAdjacentHTML('beforeend', roomCatalogList);

      const roomCard = document.getElementById(`${element.id}`);

      const sliderContainer = roomCard.querySelector('.room-card__slider');
      const sliderTrack = roomCard.querySelector('.room-card__slider-track');
      const sliderDots = roomCard.querySelector('.room-card__slider-dots');

      const btnPrev = roomCard.querySelector('.room-card__slider-btn.room-card__slider-btn--left');
      const btnNext = roomCard.querySelector('.room-card__slider-btn.room-card__slider-btn--right');

      this.#slide(sliderContainer, sliderTrack, sliderDots, btnPrev, btnNext);
      this.#getRoomCardsArr.push(roomCard);
    });
  }
}

let roomList = document.querySelector('.search-room__room-cards-list');
if (roomList !== null) {
  const roomCatalogPage = new RoomCatalogPage(roomCatalog, roomList);
  roomCatalogPage.render;
}
