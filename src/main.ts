const $form: any = document.querySelector(".age-form");
const $inputDay: any = document.querySelector(".input-day");
const $inputMonth: any = document.querySelector(".input-month");
const $inputYear: any = document.querySelector(".input-year");
const $buttonCalculate: any = document.querySelector(".btn-calculate");
let errorDay: boolean = false;
let errorMonth: boolean = false;
let errorYear: boolean = false;

const months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function showUserAge(): void {
  const date: Date = new Date();
  let currentYear: number = date.getFullYear();
  let currentMonth: number = date.getMonth() + 1;
  let currentDay: number = date.getDate();

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

  const $textYear: any = document.querySelector(".text-year");
  const $textMonth: any = document.querySelector(".text-month");
  const $textDay: any = document.querySelector(".text-day");

  $textYear.textContent = userYears;
  $textMonth.textContent = userMonths;
  $textDay.textContent = userDays;

  event?.preventDefault();
}

function validateDay(DD: string): boolean {
  const $labelDay: any = document.querySelector(".label-day");
  const $textErrorDay: any = document.querySelector(".day-error-text");

  if (DD.length === 0) {
    $textErrorDay.textContent = "This field is required";
    $labelDay.classList.add("error");
    $inputDay.classList.add("error");
    return (errorDay = true);
  } else if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(DD)) {
    $textErrorDay.textContent = "Invalid Day format";
    $labelDay.classList.add("error");
    $inputDay.classList.add("error");
    return (errorDay = true);
  } else {
    $textErrorDay.textContent = "";
    $labelDay.classList.remove("error");
    $inputDay.classList.remove("error");
    return (errorDay = false);
  }
}

function validateMonth(MM: string): boolean {
  const $labelMonth: any = document.querySelector(".label-month");
  const $textErrorMonth: any = document.querySelector(".month-error-text");

  if (MM.length === 0) {
    $textErrorMonth.textContent = "This field is required";
    $labelMonth.classList.add("error");
    $inputMonth.classList.add("error");
    return (errorMonth = true);
  } else if (!/^0[0-9]|1[0-2]$/.test(MM)) {
    $textErrorMonth.textContent = "Invalid month format";
    $labelMonth.classList.add("error");
    $inputMonth.classList.add("error");
    return (errorMonth = true);
  } else {
    $textErrorMonth.textContent = "";
    $labelMonth.classList.remove("error");
    $inputMonth.classList.remove("error");
    return (errorMonth = false);
  }
}

function validateYear(YYYY: string): boolean {
  const $labelYear: any = document.querySelector(".label-year");
  const $textErrorYear: any = document.querySelector(".year-error-text");
  const currentYear = new Date().getFullYear();
  const userYear: number = Number(YYYY);

  if (YYYY.length === 0) {
    $textErrorYear.textContent = "This field is required";
    $labelYear.classList.add("error");
    $inputYear.classList.add("error");
    return (errorYear = true);
  } else if (userYear > currentYear) {
    $textErrorYear.textContent = "Invalid year format";
    $labelYear.classList.add("error");
    $inputYear.classList.add("error");
    return (errorYear = true);
  } else {
    $textErrorYear.textContent = "";
    $labelYear.classList.remove("error");
    $inputYear.classList.remove("error");
    return (errorYear = false);
  }
}

function validateForm(): void {
  validateMonth($inputMonth.value);
  validateDay($inputDay.value);
  validateYear($inputYear.value);

  if (errorDay == false && errorMonth == false && errorYear == false) {
    showUserAge();
  }

  console.log(event?.preventDefault());
  event?.preventDefault();
}

$buttonCalculate.onclick = validateForm;
