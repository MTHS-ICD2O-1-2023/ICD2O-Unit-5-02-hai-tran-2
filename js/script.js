// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"
/**
 * This function displays the slider value.
 */
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 6) + 1

  const optionPositive = document.getElementById('option-positive').checked

  if (optionPositive == true) {
    document.getElementById("result").innerHTML = "The random number is : " + randomNumber
  } else {
    document.getElementById("result").innerHTML = "The random number is : -" + randomNumber
  }
}