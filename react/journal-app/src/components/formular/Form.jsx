import  { useState } from 'react';
import "./form.css"

function Form() {
    const [motto, setMotto] = useState('');
    const [notes, setNotes] = useState('');
  
    const handleMottoChange = (e) => {
      setMotto(e.target.value);
    };
  
    const handleNotesChange = (e) => {
      setNotes(e.target.value);
    };
  
    const handleCreateClick = (e) => {
        e.preventDefault();


      console.log('Motto:', motto);
      console.log('Notes:', notes);
    };
  
    return (
      <div className='formular'>
        <h2 className='title'>New Entry</h2>
        <label>
          Motto:
          <input type="text" value={motto} onChange={handleMottoChange} />
        </label>
        <br />
        <label>
          Notes:
          <textarea value={notes} onChange={handleNotesChange} />
        </label>
        <br />
        <button onClick={handleCreateClick}>Create</button>
      </div>
    );
}

export default Form