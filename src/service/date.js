function generateArrayOfYears() {
  const max = new Date().getFullYear();
  const min = max - 9;
  const years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
}

const years = generateArrayOfYears();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const date = new Date();

const time = {
  years,
  months,
  date,
};

export default time;
