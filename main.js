const $inputDay = document.querySelector(".input-day");
const $inputMonth = document.querySelector(".input-month");
const $inputYear = document.querySelector(".input-year");

const $labelDay = document.querySelector(".label-day");
const $labelMonth = document.querySelector(".label-month");
const $labelYear = document.querySelector(".label-year");

const $btnCalculate = document.querySelector(".btn-calculate");

function validateForm() {
  console.log($inputDay.value);

  event.preventDefault();
}

$btnCalculate.onclick = validateForm;