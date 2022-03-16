import React, { useContext, useState } from 'react';
import CloseIcon from './CloseIcon';

export default function Form({ title, changeColor }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000');
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setName(target.value);
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if name is not empty and length is more than 0
    if (name !== '' && name.length > 0) {
      setValue(name);
      setColor(changeColor(name));
      setName('');
      setError(null);
    } else {
      setError('Please enter your name');
    }
  };

  const removeValue = () => {
    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name" name="name">
            <h1>{title}</h1>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      </form>
      {value.length > 0 && (
        <div className="output-container">
          <button onClick={removeValue} className="btn-delete">
            <CloseIcon />
          </button>
          <h2>Your name:</h2>
          <p className="output-value" style={{ color: color }}>
            {value}
          </p>
        </div>
      )}
    </>
  );
}
