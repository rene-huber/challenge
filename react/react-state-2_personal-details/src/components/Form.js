import { useState } from "react";

export default function Form({ handleCreateUser}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    handleCreateUser(name, email)
     
    // setEmail(data.email);
    // setName(data.name); 

    event.target.reset();
    console.log(name, email)

  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
