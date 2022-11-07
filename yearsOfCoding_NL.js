let yearsOfCoding = document.getElementById("js-YearsOfCoding");

const firstYear = 2022;
const thisYear = new Date().getFullYear();
const difference = thisYear - firstYear;

const returnDifference = () => {
  if (difference == 0) {
    return 'dit';
  } else if (difference == 1) {
    return 'vorig';
  } else {
    return difference;
  }
};

yearsOfCoding.innerHTML = returnDifference();