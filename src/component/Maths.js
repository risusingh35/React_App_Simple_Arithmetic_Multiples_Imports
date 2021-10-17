import React from "react";

let a, b;
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function devision(a, b) {
  return a / b;
}

export default add;
export { subtract, multiplication, devision };
