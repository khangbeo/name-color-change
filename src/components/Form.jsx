import React, { useContext } from 'react';
import AppContext from './context/AppContext';

export default function Form() {
  const { name, error, handleChange, handleSubmit } = useContext(AppContext);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name" name="name">
          <h1>Name Form</h1>
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
  );
}
