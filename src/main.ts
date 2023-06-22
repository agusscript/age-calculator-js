const $form = document.querySelector(".age-form");
const $inputDay = document.querySelector(".input-day");
const $inputMonth = document.querySelector(".input-month");
const $inputYear = document.querySelector(".input-year");
const $buttonCalculate = document.querySelector(".btn-calculate");
const date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentDay = date.getDate();
let errorDay = 0;
let errorMonth = 0;
let errorYear = 0;

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function showUserAge() {
  if ($inputDay.value > currentDay) {
    currentDay = currentDay + months[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if ($inputMonth.value > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  let userYears = currentYear - $inputYear.value;
  let userMonths = currentMonth - $inputMonth.value;
  const userDays = currentDay - $inputDay.value;

  document.querySelector(".text-year").textContent = userYears;
  document.querySelector(".text-month").textContent = userMonths;
  document.querySelector(".text-day").textContent = userDays;

  event.preventDefault();
}

function validateDay(DD) {
  const $labelDay = document.querySelector(".label-day");
  const $textErrorDay = document.querySelector(".day-error-text");

  if (DD.length === 0) {
    $textErrorDay.textContent = "This field is required";
    $labelDay.classList.add("error");
    $inputDay.classList.add("error");
    return errorDay++;
  } else if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(DD)) {
    $textErrorDay.textContent = "Invalid Day format";
    $labelDay.classList.add("error");
    $inputDay.classList.add("error");
    return errorDay++;
  } else {
    $textErrorDay.textContent = "";
    $labelDay.classList.remove("error");
    $inputDay.classList.remove("error");
    return (errorDay = 0);
  }
}

function validateMonth(MM) {
  const $labelMonth = document.querySelector(".label-month");
  const $textErrorMonth = document.querySelector(".month-error-text");

  if (MM.length === 0) {
    $textErrorMonth.textContent = "This field is required";
    $labelMonth.classList.add("error");
    $inputMonth.classList.add("error");
    return errorMonth++;
  } else if (!/^0[0-9]|1[0-2]$/.test(MM)) {
    $textErrorMonth.textContent = "Invalid month format";
    $labelMonth.classList.add("error");
    $inputMonth.classList.add("error");
    return errorMonth++;
  } else {
    $textErrorMonth.textContent = "";
    $labelMonth.classList.remove("error");
    $inputMonth.classList.remove("error");
    return (errorMonth = 0);
  }
}

function validateYear(YYYY) {
  const $labelYear = document.querySelector(".label-year");
  const $textErrorYear = document.querySelector(".year-error-text");

  if (YYYY.length === 0) {
    $textErrorYear.textContent = "This field is required";
    $labelYear.classList.add("error");
    $inputYear.classList.add("error");
    return errorYear++;
  } else if (YYYY.length != 4 || YYYY > currentYear) {
    $textErrorYear.textContent = "Invalid year format";
    $labelYear.classList.add("error");
    $inputYear.classList.add("error");
    return errorYear++;
  } else {
    $textErrorYear.textContent = "";
    $labelYear.classList.remove("error");
    $inputYear.classList.remove("error");
    return (errorYear = 0);
  }
}

function validateForm() {
  validateMonth($inputMonth.value);
  validateDay($inputDay.value);
  validateYear($inputYear.value);

  if (errorDay == 0 && errorMonth == 0 && errorYear == 0) {
    showUserAge();
  }

  event.preventDefault();
}

$buttonCalculate.onclick = validateForm;
