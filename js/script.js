// Created by: Fetuha
// Created on: Apr 2024
// This file contains the JS functions for index.html

/**
 * This function checks if the user has selected the random number from above
 */

function movieType() {
  // input
  const userAge = parseInt(document.getElementById("integer").value)

  //process
  if (userAge >= 17) {
    // output
    document.getElementById("result").innerHTML =
      "You can see an R rated movie alone!"
  }

  else if (userAge >= 13) {
    // output
    document.getElementById("result").innerHTML =
      "You can see a PG-13 movie alone!"
  }

  else if (userAge >= 5) {
    // output
    document.getElementById("result").innerHTML =
      "You can see a G or PG movie alone!"
  }

  else {
    // output
    document.getElementById("result").innerHTML =
      "You're too young for most things!"
  }
}