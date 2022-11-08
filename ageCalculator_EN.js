const birthday = new Date(1985, 2, 17);
const birth_year = birthday.getFullYear();
const birth_month = birthday.getMonth();
const birth_date = birthday.getDate();

const now = new Date();
// const now = new Date(2030, 4, 18);
let this_year = now.getFullYear();
let this_month = now.getMonth();
let this_date = now.getDate();

let last_month = this_month - 1;
if (last_month < 0) {
  last_month = 11;
}

let diffYears = this_year - birth_year;
let diffMonths = this_month - birth_month;
let diffDays = this_date - birth_date;

let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if ((this_year % 4 === 0) && (this_year % 100 !== 0) || (this_year % 400 === 0)) {
    months[1] = 29;
}

let days_left = months[last_month] + diffDays;

if (diffMonths > 0) {
  if (diffDays > 0) {
    if (diffDays > 1) {
    console.log(`The difference is ${diffYears} years, ${diffMonths} months and ${diffDays} days.`);
    } else {
      console.log(`The difference is ${diffYears} years, ${diffMonths} months and ${diffDays} day.`)
    }  
  } else if (diffDays == 0) {
    if (diffMonths > 1) {
    console.log(`The difference is ${diffYears} years and exactly ${diffMonths} months.`)
    } else {
      console.log(`The difference is ${diffYears} years and exactly ${diffMonths} month.`)
    }
  } else {
    let diffMonths_new = diffMonths - 1;
    if (diffMonths_new == 0) {
      console.log(`The difference is ${diffYears} years and ${days_left} days.`)
    } else if (diffMonths_new == 1) {
      console.log(`The difference is ${diffYears} years, ${diffMonths_new} month and ${days_left} days.`)
    } else {
      console.log(`The difference is ${diffYears} years, ${diffMonths_new} months and ${days_left} days.`)
    }
  } 
} else if (diffMonths < 0) {
    diffYears--;
    let diffMonths_new = 12 + diffMonths;
    if (diffDays == 0) {
      console.log(`The difference is ${diffYears} years and exactly ${diffMonths_new} months.`)
    } else if (diffDays < 0) {
      diffMonths_new--;
      console.log(`The difference is ${diffYears} years, ${diffMonths_new} months and ${days_left} days.`)
    } else {
      if (diffDays > 1) {
      console.log(`The difference is ${diffYears} years, ${diffMonths_new} months and ${diffDays} days.`);
    } else {
      console.log(`The difference is ${diffYears} years, ${diffMonths_new} months and ${diffDays} day.`)
    }
  }
} else if (diffMonths == 0) {
    if (diffDays > 0) {
    console.log(`The difference is ${diffYears} years and ${diffDays} days.`) 
    } else if (diffDays < 0) {
      let diffMonths_new = 11;
      console.log(`The difference is ${diffYears} years, ${diffMonths_new} months and ${days_left} days.`)
    } else {
    console.log(`As a matter of fact, it's my birthday: I turn ${diffYears} today!`);
  }
};