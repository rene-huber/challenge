console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

console.log(tosCheckbox.checked);


  if (!tosCheckbox.checked) {
    showTosError();
    // 💡 Use an early return to prevent further execution
    return;
  }



  
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("change", () => {
  if (!tosCheckbox.checked) {
    showTosError();
  } else {
    hideTosError();
  }
});
