import {useState} from "react";
import "./styles.css";
import Form from "./components/Form.js";

export default function App() {
  const [user, setUser] = useState({ 
    name: "", 
    email: "" 
  });

  const handleCreateUser = (name, email) => {
    setUser({ name, email });
  };


  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form handleCreateUser={handleCreateUser}/>
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{user.name}</span>
      </p>
      <p>
        Email: <span className="output">{user.email}</span>
      </p>
    </div>
  );
}
