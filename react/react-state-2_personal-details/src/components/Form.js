import { useState } from "react";

export default function Form({ OnCreateUser}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // event.target.reset();

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    OnCreateUser(name, email)
     
    // setEmail(data.email);
    // setName(data.name); 

    setName("");
    setEmail("");

  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" 
      name="name" 
      type="text" 
      value={name}
      onChange={(event) => setName(event.target.value)}
      placeholder="John Doe" 
      />
      
      <label htmlFor="email">Email: </label>
      <input id="email" 
      name="email" 
      type="email" 
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      placeholder="john@doe.com" 
      />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
