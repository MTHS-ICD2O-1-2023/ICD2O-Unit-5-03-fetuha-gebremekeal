// Created by: Fetuha
// Created on: Apr 2024
// This file contains the JS functions for index.html

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
      "You can see an R rated movie alone!"
  }

  if (userAge >= 13) {
    // output
    document.getElementById("result").innerHTML =
      "You can see a PG-13 movie alone!"
  }

  if (userAge >= 5) {
    // output
    document.getElementById("result").innerHTML =
      "You can see a G or PG movie alone!"
  }

  if (userNumber != randomNumber) {
    // output
    document.getElementById("result").innerHTML =
      "You didn't get it!"
  }
}