var months = [
  { shortName: 'JAN', fullName: 'January', number: 1 },
  { shortName: 'FEB', fullName: 'February', number: 2 }
];

var firstSemester = months.filter(function(month) {
  return month.number <= 6;
});

console.log(firstSemester); // ['JAN', 'FEB', .. , 'JUN']
