const age_in_years = document.getElementById("js-AgeInYears");
const full_age = document.getElementById("js-FullAge-NL");

const birthday = new Date(1985, 2, 17);
const birth_year = birthday.getFullYear();
const birth_month = birthday.getMonth();
const birth_date = birthday.getDate();

const today = new Date();
console.log(today);
// const today = new Date(2022, 3, 20);
let this_year = today.getFullYear();
let this_month = today.getMonth();
let this_date = today.getDate();

let last_month = this_month - 1;
if (last_month < 0) {
  last_month = 11;
}

let diffYears = this_year - birth_year;
let diffMonths = this_month - birth_month;
let diffDays = this_date - birth_date;

let months_array = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if ((this_year % 4 === 0) && (this_year % 100 !== 0) || (this_year % 400 === 0)) {
    months_array[1] = 29;
}

let days_left = months_array[last_month] + diffDays;

const options = {weekday: 'long'};
const day_of_week = new Intl.DateTimeFormat('nl-NL', options).format(today);

if (diffMonths > 0) {
    if (diffDays > 0) {
      if (diffDays > 1) {
        if (diffMonths > 1) {
            full_age.innerText = `${diffYears} jaar, ${diffMonths} maanden en ${diffDays} dagen om precies te zijn.`;
            console.log(`The difference is ${diffYears} years, ${diffMonths} months and ${diffDays} days.`)
        } else {
            full_age.innerText = `${diffYears} jaar, één maand en ${diffDays} dagen om precies te zijn.`;
            console.log(`The difference is ${diffYears} years, ${diffMonths} month and ${diffDays} days.`)
        }
      } else {
        if (diffMonths > 1) {
            full_age.innerText = `${diffYears} jaar, ${diffMonths} maanden en één dag om precies te zijn.`;
            console.log(`The difference is ${diffYears} years, ${diffMonths} months and ${diffDays} day.`)
        } else {
            full_age.innerText = `${diffYears} jaar, één maand en één dag om precies te zijn.`;
            console.log(`The difference is ${diffYears} years, ${diffMonths} month and ${diffDays} day.`)
        }
      }  
    } else if (diffDays == 0) {
      if (diffMonths > 1) {
        full_age.innerText = `${diffYears} jaar en ${diffMonths} hele maanden om precies te zijn.`;
        console.log(`The difference is ${diffYears} years and exactly ${diffMonths} months.`)
      } else {
        full_age.innerText = `${diffYears} jaar en één hele maand om precies te zijn.`;
        console.log(`The difference is ${diffYears} years and exactly ${diffMonths} month.`)
      }
    } else {
      let diffMonths_new = diffMonths - 1;
      if (diffMonths_new == 0) {
        full_age.innerText = `${diffYears} jaar en ${days_left} dagen om precies te zijn.`;
        console.log(`The difference is ${diffYears} years and ${days_left} days.`)
      } else if (diffMonths_new == 1) {
        full_age.innerText = `${diffYears} jaar, één maand en ${days_left} dagen om precies te zijn.`;
        console.log(`The difference is ${diffYears} years, ${diffMonths_new} month and ${days_left} days.`)
      } else {
        full_age.innerText = `${diffYears} jaar, ${diffMonths_new} maanden en ${days_left} dagen om precies te zijn.`;
        console.log(`The difference is ${diffYears} years, ${diffMonths_new} months and ${days_left} days.`)
      }
    } 
  } else if (diffMonths < 0) {
      diffYears--;
      let diffMonths_new = 12 + diffMonths;
      if (diffDays == 0) {
        full_age.innerText = `${diffYears} jaar en ${diffMonths_new} hele maanden om precies te zijn.`;
        console.log(`The difference is ${diffYears} years and exactly ${diffMonths_new} months.`)
      } else if (diffDays < 0) {
        diffMonths_new--;
        full_age.innerText = `${diffYears} jaar, ${diffMonths_new} maanden en ${days_left} dagen om precies te zijn.`;
        console.log(`The difference is ${diffYears} years, ${diffMonths_new} months and ${days_left} days.`)
      } else {
        if (diffDays > 1) {
            full_age.innerText = `${diffYears} jaar, ${diffMonths_new} maanden en ${diffDays} dagen om precies te zijn.`;
            console.log(`The difference is ${diffYears} years, ${diffMonths_new} months and ${diffDays} days.`);
      } else {
            full_age.innerText = `${diffYears} jaar, ${diffMonths_new} maanden en één dag om precies te zijn.`;
            console.log(`The difference is ${diffYears} years, ${diffMonths_new} months and ${diffDays} day.`)
      }
    }
  } else if (diffMonths == 0) {
      if (diffDays > 0) {
        if (diffDays > 1) {
            full_age.innerText = `${diffYears} jaar en ${diffDays} dagen om precies te zijn.`;
          console.log(`The difference is ${diffYears} years and ${diffDays} days.`) 
        } else {
            full_age.innerText = `${diffYears} jaar en één dag om precies te zijn.`;
          console.log(`The difference is ${diffYears} years and ${diffDays} day.`)
        }
      } else if (diffDays < 0) {
        diffYears--;
        let diffMonths_new = 11;
        full_age.innerText = `${diffYears} jaar, ${diffMonths_new} maanden en ${days_left} dagen om precies te zijn.`;
        console.log(`The difference is ${diffYears} years, ${diffMonths_new} months and ${days_left} days.`)
      } else {
        full_age.innerText = `Sterker nog: het is vandaag (${day_of_week} 17 maart) mijn verjaardag!`;
      console.log(`As a matter of fact, it's my birthday: I turn ${diffYears} today!`);
    }
  };

  age_in_years.innerText = diffYears;
