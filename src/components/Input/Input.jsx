import React, { forwardRef } from 'react';
import { InputForm } from './style';

const Input = forwardRef(({ label, name, type, placeholder }, ref) => {
  return (
    <>
      <label>{label}</label>
      <InputForm name={name} type={type} placeholder={placeholder} ref={ref} />
    </>
  );
});

export default Input;
