import React, { useRef } from "react";
import { uid } from "uid";
import "./EntryForm.css";
import Button from "../Button";

export default function EntryForm({onAddEntry}) {
  const mottoInputRef = useRef();
  
  
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    const newId = uid();

const newEntry ={
  motto: data.motto, 
  notes: data.notes, 
  date: new Date()
  .toLocaleDateString("en-us",
  { dateStyle: "medium" }),
  id: newId,
}

    onAddEntry(newEntry);

    e.target.reset();
    mottoInputRef.current.focus();
  }


  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input  ref={mottoInputRef} type="text" name="motto" id="motto" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}
