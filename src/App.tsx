import React, { useState } from 'react';
import './App.css';
import Input from './components/input/Input';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <Input label='Label' valueUpdated={(newVal) => setValue(newVal)} />
      <br />
      <div>
        The value of the control is {value}
      </div>
    </div>
  );
}

export default App;
