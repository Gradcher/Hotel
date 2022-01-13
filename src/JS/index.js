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
// Page components
import '../PUG/includes/pageComponents/roomDetails/roomDetails';
import '../PUG/includes/pageComponents/searchRoom/roomSearch';

import 'jquery';

import './deviceDefinition';
import './TEST';

// Datepicker
/* Site — https://mymth.github.io/vanillajs-datepicker */
import { Datepicker } from 'vanillajs-datepicker';
import { DateRangePicker } from 'vanillajs-datepicker';

import ru from 'vanillajs-datepicker/locales/ru';

Object.assign(Datepicker.locales, ru);

const calendars = document.querySelectorAll('input[name="calendar"]');
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

const rangeCalendars = document.querySelectorAll('.range-calendar');
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

const inlineRangeCalendars = document.querySelectorAll('.inline-range-calendar');
if (inlineRangeCalendars !== null) {
  // eslint-disable-next-line no-restricted-syntax
  for (const inlineRangeCalendar of inlineRangeCalendars) {
    const inlineRangepicker = new DateRangePicker(inlineRangeCalendar, {
      clearBtn: true,
      language: 'ru',
      nextArrow: '',
      prevArrow: '',
      todayHighlight: true,
      format: 'dd M',
    });
  }
}
