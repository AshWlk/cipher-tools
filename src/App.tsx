import React, { useState } from 'react';
import './App.css';
import Input from './components/input/Input';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <div style={{ maxWidth: '300px' }}>
        <Input label='Label' onChange={(event) => setValue(event.target.value)} />
      </div>
      <br />
      <div>
        The value of the control is {value}
      </div>
    </div>
  );
}

export default App;
