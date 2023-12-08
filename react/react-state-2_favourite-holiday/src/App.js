import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [holiday, setHoliday] = useState("who knows?");
  const [date, setDate] = useState("yesterday");
  const focus = useRef(null);

const focusInput = () => focus.current.focus();


  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    setHoliday(formData.get("holiday"));
    setDate(formData.get("date"));

   event.target.reset();
   focusInput()
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
          ref={focus}
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
