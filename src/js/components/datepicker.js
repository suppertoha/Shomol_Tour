import AirDatepicker from 'air-datepicker';

const datePicker = document.querySelector('#airdatepicker')
new AirDatepicker(datePicker, {
  //inline: true,
  range: true,
  multipleDatesSeparator: ' - ',
  //isMobile: true,
  autoClose: true,
  buttons: ['today', 'clear'],
  locale: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'MM yyyy dd',
    timeFormat: 'hh:mm aa',
    firstDay: 0
  }

})

