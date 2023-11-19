console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data: ", data);

  form.reset();

  const firstNameInput = document.querySelector('[data-js="firstName"]');
  firstNameInput.focus();
});




