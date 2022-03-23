import React, { useContext } from 'react';
import AppContext from '../components/context/AppContext';
import Form from '../components/common/Form';

export default function ColorName() {
  const { getColor, reverseColor } = useContext(AppContext);

  return (
    <>
      <Form title="Color Your Name" changeColor={getColor} />
      <Form title="Reverse Color" changeColor={reverseColor} />
    </>
  );
}
