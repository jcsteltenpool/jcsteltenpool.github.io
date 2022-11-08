let yearsOfCoding = document.getElementById("js-YearsOfCoding");

const firstYear = 2022;
const thisYear = new Date().getFullYear();
const difference = thisYear - firstYear;

const returnDifference = () => {
  if (difference == 0) {
    return 'this';
  } else if (difference == 1) {
    return 'last';
  } else {
    return difference;
  }
};

yearsOfCoding.innerHTML = returnDifference();