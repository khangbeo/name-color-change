import React, { useContext, useState } from 'react';
import AppContext from './components/context/AppContext'
import Form from './components/Form';
import './style.css';
import Slider from './components/common/Slider';

export default function App() {
  const { getColor, reverseColor } = useContext(AppContext);

  return (
    <div className="container">
      <Form title='Color Your Name' changeColor={getColor} />
      <Form title='Reverse Color' changeColor={reverseColor} />
      <Slider color={'white'} textColor={'white'} />
      <Slider color={'black'} textColor={'black'} />
    </div>
  );
}
