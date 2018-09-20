var months = [
  { shortName: 'JAN', fullName: 'January', number: 1, total: 31 },
  { shortName: 'FEB', fullName: 'February', number: 2, total: 28 },
  { shortName: 'MAR', fullName: 'March', number: 3, total: 30 }
];

var days = months.reduce(function(acc, month) {
  return acc + month.total;
}, 0);

console.log(days); // 365
