import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.7.min.css';

const elements = {
  picker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
elements.startBtn.disabled = true;
elements.startBtn.addEventListener('click', onStartClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date(selectedDates[0]) <= Date.now()) {
      elements.startBtn.toggleAttribute('disabled', true);
      NotifyPastTimedate();
    } else {
      elements.startBtn.toggleAttribute('disabled', false);
    }
  },
};
const picker = flatpickr('#datetime-picker', options);

/**
 * * Handles start timer button click
 * @returns
 */
function onStartClick() {
  const between = picker.selectedDates[0].getTime() - Date.now();
  if (between <= 0) {
    NotifyPastTimedate();
    return;
  }
  elements.picker.disabled = true;
  elements.startBtn.disabled = true;

  setInterval(() => {
    const between = picker.latestSelectedDateObj.getTime() - Date.now();
    const timeObj = convertMs(between);
    updateTimer(timeObj);
  }, 1000);
}

/**
 * * Creates object of timedate values.
 * @param {number} ms Value of time in ms.
 * @returns {object} Object of timedate values.
 */
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

/**
 * * Updates on page timer html elements whith new remaining time
 * @param {object} time time object, consisting of days, hours, minutes and seconds values.
 */
function updateTimer(time) {
  elements.days.textContent = addLeadingZero(time.days);
  elements.hours.textContent = addLeadingZero(time.hours);
  elements.minutes.textContent = addLeadingZero(time.minutes);
  elements.seconds.textContent = addLeadingZero(time.seconds);
}

/**
 * * Adds leading zeros in value has only one digit.
 * @param {number} value value to convert.
 * @returns {string | number} String with added leading zeros or value itself.
 */
function addLeadingZero(value) {
  return value < 10 ? String(value).padStart(2, '0') : value;
}

/**
 * * Notifies about selected timedate is in the past.
 */
function NotifyPastTimedate() {
  Notify.failure('Please choose a date in the future');
}
