import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Input from "./components/input/Input";
import { isDefined } from "./functions/is-defined/is-defined";
import { shiftCharacter } from "./functions/shift-character/shift-character";

const App = () => {
   const [value, setValue] = useState<Record<string, string>>();
   const handleOnStateChange = (state: Record<string, string>): void => {
      setValue(state);
      console.log(state);
   };

   const getEncodedCharacter = (): string => {
      return value?.char && isDefined(+value?.offset) ? shiftCharacter(value.char, +value.offset) : "";
   };

   return (
      <div style={{ maxWidth: "300px" }}>
         <Form onStateChange={handleOnStateChange}>
            <Input label="Character" name="char" maxLength={1} pattern="^[a-zA-Z]$" />
            <Input label="Offset Value" name="offset" pattern="^-?[0-9]*$" />
            <Input label="Encoded Character" name="encoded-char" readOnly disabled value={getEncodedCharacter()} />
         </Form>
      </div>
   );
};

export default App;
