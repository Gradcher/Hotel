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
import '../PUG/includes/baseBlocks/roomCard/roomCard';
import './roomDetails';
import './roomSearch';
import './deviceDefenition';

// Datepicker
/* Site — https://mymth.github.io/vanillajs-datepicker */
import { Datepicker } from 'vanillajs-datepicker';
import { DateRangePicker } from 'vanillajs-datepicker';

import ru from 'vanillajs-datepicker/locales/ru';

Object.assign(Datepicker.locales, ru);

const calendars = document.querySelectorAll('input[name="foo"]');
if (calendars !== null) {
  // eslint-disable-next-line no-restricted-syntax
  for (const calendar of calendars) {
    const datepicker = new Datepicker(calendar, {
      clearBtn: true,
      language: 'ru',
      nextArrow: '',
      prevArrow: '',
      todayHighlight: true,
    });
  }
}

const rangeCalendars = document.querySelectorAll('.foo');
if (rangeCalendars !== null) {
  // eslint-disable-next-line no-restricted-syntax
  for (const rangeCalendar of rangeCalendars) {
    const rangepicker = new DateRangePicker(rangeCalendar, {
      clearBtn: true,
      language: 'ru',
      nextArrow: '',
      prevArrow: '',
      todayHighlight: true,
    });
  }
}

const rangeCalendarsOneBlock = document.querySelectorAll(
  '.range-calendar--one-block'
);
if (rangeCalendarsOneBlock !== null) {
  // eslint-disable-next-line no-restricted-syntax
  for (const rangeCalendarOneBlock of rangeCalendarsOneBlock) {
    const rangepickerOneBlock = new DateRangePicker(rangeCalendarOneBlock, {
      clearBtn: true,
      language: 'ru',
      nextArrow: '',
      prevArrow: '',
      todayHighlight: true,
      format: 'dd-M',
    });
  }
}
