// Created by: Fetuha
// Created on: Apr 2024
// This file contains the JS functions for index.html

const age

/**
 * This function checks if the user has selected the random number from above
 */

function checkNumber() {
  // input
  const userNumber = parseInt(document.getElementById("integer").value)

  //process
  if (userNumber == randomNumber) {
    // output
    document.getElementById("result").innerHTML =
      "You got it!"
  }

  if (userNumber != randomNumber) {
    // output
    document.getElementById("result").innerHTML =
      "You didn't get it!"
  }
}