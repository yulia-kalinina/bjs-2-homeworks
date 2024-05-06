"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentConverted = percent / 100 / 12;
  let refundedAmount = amount - contribution;
  let monthPayment =
    refundedAmount *
    (percentConverted +
      percentConverted / ((1 + percentConverted) ** countMonths - 1));

  return Number((monthPayment * countMonths).toFixed(2));
}
