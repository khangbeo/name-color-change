import React, { useState } from 'react';
import { Slider } from '@mui/material';

export default function Slider({ color, textColor }) {
  const [slider, setSlider] = useState(null);

  const handleChange = ({ target }) => {
    setSlider(target.value);
  };

  return (
    <>
      <Slider value={slider} onChange={handleChange} style={{color}} />
      <h3 style={{ color: textColor }}>{slider}</h3>
    </>
  );
}
