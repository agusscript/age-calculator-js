export const inputDay = <HTMLInputElement>document.querySelector(".input-day");
export const inputMonth = <HTMLInputElement>document.querySelector(".input-month");
export const inputYear = <HTMLInputElement>document.querySelector(".input-year");
export let errorDay: boolean = false;
export let errorMonth: boolean = false;
export let errorYear: boolean = false;

export function validateDay(DD: string): boolean {
  const labelDay = <HTMLLabelElement>document.querySelector(".label-day");
  const textErrorDay = <HTMLSpanElement>document.querySelector(".day-error-text");
  const dayRegex = /^(0?[1-9]|[12][0-9]|3[01])$/;

  if (DD.length === 0) {
    textErrorDay.textContent = "This field is required";
    labelDay.classList.add("error");
    inputDay.classList.add("error");
    return (errorDay = true);
  } else if (!dayRegex.test(DD)) {
    textErrorDay.textContent = "Invalid Day format";
    labelDay.classList.add("error");
    inputDay.classList.add("error");
    return (errorDay = true);
  } else {
    textErrorDay.textContent = "";
    labelDay.classList.remove("error");
    inputDay.classList.remove("error");
    return (errorDay = false);
  }
}

export function validateMonth(MM: string): boolean {
  const labelMonth = <HTMLLabelElement>document.querySelector(".label-month");
  const textErrorMonth = <HTMLSpanElement>document.querySelector(".month-error-text");
  const monthRegex = /^0[0-9]|1[0-2]/;

  if (MM.length === 0) {
    textErrorMonth.textContent = "This field is required";
    labelMonth.classList.add("error");
    inputMonth.classList.add("error");
    return (errorMonth = true);
  } else if (!monthRegex.test(MM)) {
    textErrorMonth.textContent = "Invalid month format";
    labelMonth.classList.add("error");
    inputMonth.classList.add("error");
    return (errorMonth = true);
  } else {
    textErrorMonth.textContent = "";
    labelMonth.classList.remove("error");
    inputMonth.classList.remove("error");
    return (errorMonth = false);
  }
}

export function validateYear(YYYY: string): boolean {
  const labelYear = <HTMLLabelElement>document.querySelector(".label-year");
  const textErrorYear = <HTMLSpanElement>document.querySelector(".year-error-text");
  const currentYear = new Date().getFullYear();
  const userYear: number = Number(YYYY);

  if (YYYY.length === 0) {
    textErrorYear.textContent = "This field is required";
    labelYear.classList.add("error");
    inputYear.classList.add("error");
    return (errorYear = true);
  } else if (userYear > currentYear) {
    textErrorYear.textContent = "Invalid year format";
    labelYear.classList.add("error");
    inputYear.classList.add("error");
    return (errorYear = true);
  } else {
    textErrorYear.textContent = "";
    labelYear.classList.remove("error");
    inputYear.classList.remove("error");
    return (errorYear = false);
  }
}
