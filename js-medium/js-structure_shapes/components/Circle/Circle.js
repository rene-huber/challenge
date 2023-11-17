import { getRandomColor } from '../../utils/randomColor.js';

function Circle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.addEventListener("click", () => {
      const randomColor = getRandomColor();
      circle.style.backgroundColor = randomColor;
    });
  return circle;
}

export default Circle;