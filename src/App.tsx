import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Input from "./components/input/Input";

const App = () => {
   const [value, setValue] = useState<Record<string, string>>();
   const handleOnStateChange = (state: Record<string, string>): void => {
      setValue(state);
      console.log(state);
   };

   return (
      <div>
         <div style={{ maxWidth: "300px" }}>
            <Form onStateChange={handleOnStateChange}>
               <Input label="Label" name="test-1" />
               <Input label="Label" name="test-2" />
            </Form>
         </div>
         <div>The value of the control is {value?.["test-1"]}</div>
      </div>
   );
};

export default App;
