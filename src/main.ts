import {
  validateDay,
  validateMonth,
  validateYear,
  inputDay,
  inputMonth,
  inputYear,
  errorDay,
  errorMonth,
  errorYear,
} from "./validations";

const buttonCalculate = <HTMLButtonElement>document.querySelector(".btn-calculate");
const months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function showUserAge(): void {
  const date: Date = new Date();
  let currentYear: number = date.getFullYear();
  let currentMonth: number = date.getMonth() + 1;
  let currentDay: number = date.getDate();

  const dayValue: number = Number(inputDay.value);
  const monthValue: number = Number(inputMonth.value);
  const yearValue: number = Number(inputYear.value);

  if (dayValue > currentDay) {
    currentDay = currentDay + months[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if (monthValue > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  let userYears = currentYear - yearValue;
  let userMonths = currentMonth - monthValue;
  const userDays = currentDay - dayValue;

  const textYear = <HTMLSpanElement>document.querySelector(".text-year");
  const textMonth = <HTMLSpanElement>document.querySelector(".text-month");
  const textDay = <HTMLSpanElement>document.querySelector(".text-day");

  textYear.textContent = userYears.toString();
  textMonth.textContent = userMonths.toString();
  textDay.textContent = userDays.toString();

  event?.preventDefault();
}

function validateForm(): void {
  validateDay(inputDay.value);
  validateMonth(inputMonth.value);
  validateYear(inputYear.value);

  if (errorDay == false && errorMonth == false && errorYear == false) {
    showUserAge();
  }
  console.log(errorDay, errorMonth, errorYear);
  event?.preventDefault();
}

buttonCalculate.onclick = validateForm;
