"use strict";
const WIDTH = 7;
const HEIGHT = 5;
const DIFFICULTY = 3;

// Toggle a single cell on <-> off
//var cell = document.querySelector("#y-2-x-3");
//let cell = document.querySelector("#" + id);
// every element has `.id` and `.classList` props (and more!

function toggleCell(y, x) {
  // console.log("toggleCell", y, x);

  if (y >= 0 && y < HEIGHT && x >= 0 && x < WIDTH) {
    let id = "y-" + y + "-x-" + x;
    let cel = document.querySelector("#" + id);
    cel.classList.toggle("on");
  }
}

function toggleCellNeighbours(y, x) {
  // console.log("toggleCellAndNeighbors", y, x);

  toggleCell(y - 1, x);
  toggleCell(y + 1, x);
  toggleCell(y, x);
  toggleCell(y, x - 1);
  toggleCell(y, x + 1);
}
//let id = event.target.id;  // like "y-3-x-2"
//let y = Number(id[2]);
//let x = Number(id[6]);
//toggleCell(4, 1);
//toggleCell(0, 1);

// let h1 = document.querySelector('h1')
// h1.addEventListener("click", sayHi)

// handle player clicking on cell:
//
// - find out where they clicked
// - toggle that cell and its neighbors
// - if they won, pop up winning message

function handleClick(evt) {
  // console.log("handleCellClick");

  let id = evt.target.id;
  //console.log(id);

  let y = Number(id[2]);
  let x = Number(id[6]);
  //toggleCell(y, x);
  toggleCellNeighbours(y, x);

  if (checkForWin()) {
    setTimeout(handleWin, 500); // 500ms = 1/2sec
  }
}

function addClickListeners() {
  for (let cell of document.querySelectorAll("td")) {
    cell.addEventListener("click", handleClick);
  }
}
function checkForWin() {
  // console.log("checkForWin");

  for (let cell of document.querySelectorAll("td")) {
    if (cell.classList.contains("on")) {
      return false;
    }
  }
  return true;
}

// pop up a winning message & reset

function handleWin() {
  // console.log("handleWin");

  alert("Great Job!");
  setupRandomBoard();
}

// Pick a random integer 0 ... upperRange-1

function randomNumber(upperNumber) {
  // console.log("randomNum", upperNumber);
  return Math.floor(Math.random() * upperNumber);
}

function setupRandomBoard() {
  // console.log("setupRamdomBoard");

  for (let i = 0; i < DIFFICULTY; i++) {
    let x = randomNumber(WIDTH);
    let y = randomNumber(HEIGHT);
    toggleCellNeighbours(y, x);
  }
}

// Code that runs when page first loads:

setupRandomBoard();
addClickListeners();
