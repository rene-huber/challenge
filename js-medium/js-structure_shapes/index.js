console.clear();

import { getRandomColor } from './utils/randomColor.js'; 
import Circle from './components/Circle/Circle.js';
const root = document.getElementById("root");

console.log(Circle);

const circleElement = Circle(); // Create Circle component

{/* 
const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  const randomColor = getRandomColor();
  circle.style.backgroundColor = randomColor;
});
*/}

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  const randomColor = getRandomColor();
  square.style.backgroundColor = randomColor;
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  const randomColor = getRandomColor();
  pentagon.style.backgroundColor = randomColor;
});

root.append(circleElement, square, pentagon);
