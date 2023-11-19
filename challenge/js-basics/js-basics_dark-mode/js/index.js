console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const switchToDarkButton = document.querySelector(
  '[data-js="dark-mode-button"]'
);
const switchToLightButton = document.querySelector(
  '[data-js="light-mode-button"]'
);
const toggleModeButton = document.querySelector('[data-js="toggle-button"]');

switchToDarkButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

switchToLightButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

// ------------------------------ //

switchToDarkButton.addEventListener("click", addDarkMode);
switchToLightButton.addEventListener("click", removeDarkMode);
toggleModeButton.addEventListener("click", toggleDarkMode);

function addDarkMode() {
  bodyElement.classList.add("dark");
}

function removeDarkMode() {
  bodyElement.classList.remove("dark");
}

function toggleDarkMode() {
  bodyElement.classList.toggle("dark");
}
