import React, { useContext } from 'react';
import AppContext from './AppContext';
import CloseIcon from './CloseIcon';
import './style.css';

export default function App() {
  const { name, error, handleChange, handleSubmit, value, removeValue } =
    useContext(AppContext);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name" name="name">
            <h1>Name Color Change</h1>
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

      {value && (
        <div className="output-container">
          <button onClick={removeValue} className="btn-delete">
            <CloseIcon />
          </button>
          <h2>Your name:</h2>
          <p className="output-value">{value}</p>
        </div>
      )}
    </div>
  );
}
