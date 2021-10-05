// Styles
import '../SCSS/styles.scss';
// Primitives
import '../PUG/includes/primitives/likeBtn/likeBtn';
import '../PUG/includes/primitives/doubleSlider/doubleSlider';
import '../PUG/includes/primitives/rateBtn/rateBtn';
import '../PUG/includes/primitives/pagination/pagination';
import '../PUG/includes/primitives/dropdown/dropdown';
// Base blocks
import '../PUG/includes/baseBlocks/expandableChboxList/expandableChboxList';

// Datepicker
/* Site — https://mymth.github.io/vanillajs-datepicker */
import { Datepicker } from 'vanillajs-datepicker';
import { DateRangePicker } from 'vanillajs-datepicker';

import ru from 'vanillajs-datepicker/locales/ru';

Object.assign(Datepicker.locales, ru);

const calendar = document.querySelector('input[name="foo"]');
if (calendar !== null) {
  const datepicker = new Datepicker(calendar, {
    clearBtn: true,
    language: 'ru',
    nextArrow: '',
    prevArrow: '',
    todayHighlight: true,
  });
}

const rangeCalendar = document.getElementById('foo');
if (rangeCalendar !== null) {
  const rangepicker = new DateRangePicker(rangeCalendar, {
    clearBtn: true,
    language: 'ru',
    nextArrow: '',
    prevArrow: '',
    todayHighlight: true,
  });
}
