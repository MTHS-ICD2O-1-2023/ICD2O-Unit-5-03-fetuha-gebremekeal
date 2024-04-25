// Created by: Fetuha
// Created on: Apr 2024
// This file contains the JS functions for index.html

const 

/**
 * This function checks if the user has selected the random number from above
 */

function checkNumber() {
  // input
  const userAge = parseInt(document.getElementById("integer").value)

  //process
  if (userAge >= 17) {
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