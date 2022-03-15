import React, { useContext } from 'react';
import AppContext from './components/context/AppContext';
import CloseIcon from './components/CloseIcon';
import Form from './components/Form';
import './style.css';

export default function App() {
  const { color, value, removeValue } = useContext(AppContext);

  return (
    <div className="container">
      <Form />
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
    </div>
  );
}
