import React, { useState } from 'react';
import './Input.css';

export interface InputProps {
  label: string;
  value?: string;
  valueUpdated?: (newValue: string) => void;
}

const Input = (props: InputProps): JSX.Element => {
  const [value, setValue] = useState(props.value ?? '');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    props.valueUpdated?.(value);
    setValue(value);
  };

  return (
    <div className='Input'>
      <label>{props.label}</label>
      <input
        type='text'
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

export default Input;
