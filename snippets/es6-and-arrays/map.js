var months = [
  { shortName: 'JAN', fullName: 'January', number: 1 },
  { shortName: 'FEB', fullName: 'February', number: 2 }
];

var shortNameMonths = months.map(function(month) {
  return month.shortName;
});

console.log(shortNameMonths); // ['JAN', 'FEB', ...]
