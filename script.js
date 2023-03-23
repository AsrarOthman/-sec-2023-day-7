/// declare input and output - Start
let inputWeight = document.querySelector("#weight");
let inputHeight = document.querySelector("#height");
let outBmi = document.querySelector("#bmi");
let outBmiAdvice = document.querySelector("#bmi-advice");
let tekan = document.getElementById("calculate-btn");

/// declare input and output - End

// Function - Start
tekan.addEventListener("click", clickAkanTerjadi);

function clickAkanTerjadi(event) {
  event.preventDefault(); // stops the default action
  inputW = inputWeight.value; //convert string to value number
  inputH = inputHeight.value; //convert string to value number

  BMI = inputW / inputH / inputH; // BMI formular
  console.log(BMI);

  // filler by condition
  if (BMI < 18.5) {
    outMsg = "Underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    outMsg = "Normal weight ";
  } else if (BMI >= 25 && BMI <= 29.9) {
    outMsg = "Overweight";
  } else {
    outMsg = "Obesity";
  }
  outBmi.innerText = "BMI = " + BMI.toFixed(2); //Display data in HTML
  outBmiAdvice.innerText = outMsg; //Display data in HTML
}
