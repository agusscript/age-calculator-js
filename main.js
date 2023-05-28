const $inputDay = document.querySelector(".input-day");
const $inputMonth = document.querySelector(".input-month");
const $inputYear = document.querySelector(".input-year");
const $buttonCalculate = document.querySelector(".btn-calculate");

function validateForm() {
  const $labelDay = document.querySelector(".label-day");
  const $labelMonth = document.querySelector(".label-month");
  const $labelYear = document.querySelector(".label-year");
}

function showUserAge() {
  const currentDate = new Date().toJSON().slice(0, 10);
  const currentYear = parseInt(currentDate.slice(0, 4));
  const currentMonth = parseInt(currentDate.slice(5, 7));
  const currentDay = parseInt(currentDate.slice(8, 10));
  let userYears = currentYear - $inputYear.value;
  let userMonths = currentMonth - $inputMonth.value;
  const userDays = currentDay - $inputDay.value;

  if ($inputMonth.value > currentMonth) {
    --userYears;
    userMonths += 12;
  }

  document.querySelector(".text-year").textContent = userYears;
  document.querySelector(".text-month").textContent = userMonths;
  document.querySelector(".text-day").textContent = userDays;

  event.preventDefault();
}

$buttonCalculate.onclick = showUserAge;