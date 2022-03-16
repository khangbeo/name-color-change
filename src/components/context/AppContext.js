import React, { createContext, useState } from 'react';
import ColorHash from 'color-hash';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000');
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');

  let hash = new ColorHash();

  function getColor(string) {
    return hash.hex(string);
  }

  function reverseColor(string) {
    let hash = getColor(string)
    return hash[0] + hash.substring(1, 7).split('').reverse().join('')
  }

  const handleChange = ({ target }) => {
    setName(target.value);
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if name is not empty and length is more than 0
    if (name !== '' && name.length > 0) {
      setValue(name);
      setColor(getColor(name));
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
    <AppContext.Provider
      value={{
        name,
        color,
        error,
        handleChange,
        handleSubmit,
        value,
        removeValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
