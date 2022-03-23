import React from 'react';
import Slider from '../components/common/Slider';
import Container from '@mui/material/Container';
export default function SliderValue() {
  return (
    <Container>
      <Slider color={'white'} textColor={'white'} />
      <Slider color={'black'} textColor={'black'} />
    </Container>
  );
}
