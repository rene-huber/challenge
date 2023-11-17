// index.js

import { getRandomColor } from './utils/randomColor.js'; 

const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  // Use getRandomColor function to get a random color
  const randomColor = getRandomColor();
  circle.style.backgroundColor = randomColor;
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  // Use getRandomColor function to get a random color
  const randomColor = getRandomColor();
  square.style.backgroundColor = randomColor;
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  // Use getRandomColor function to get a random color
  const randomColor = getRandomColor();
  pentagon.style.backgroundColor = randomColor;
});

root.append(circle, square, pentagon);
