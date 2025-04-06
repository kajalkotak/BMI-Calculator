"use strict";

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#width").value);
  const result = document.querySelector("#result");

  if (!height || height <= 0 || !weight || weight <= 0) {
    result.textContent = "Please enter valid height and width";
    result.style.color = "red";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  let category = "";

  if (bmi < 18.5) {
    category = "underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi < 29.9) {
    category = "overweight";
  } else {
    category = "obesity";
  }

  result.textContent = `Your BMI is  ${bmi} (${category})`;
  result.style.color = "#333";
});
