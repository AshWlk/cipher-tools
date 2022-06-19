import React, { ReactElement, useEffect, useState } from "react";
import "./Input.css";

export interface InputProps
   extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "pattern"> {
   label: string;
   pattern?: RegExp;
}

const Input = ({ label, pattern, onChange, value, ...otherProps }: InputProps): ReactElement<InputProps> => {
   const [inputValue, setInputValue] = useState(value || "");
   const handleValueChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (!pattern || !event.target.value || event.target.value.match(pattern)) {
         setInputValue(event.target.value);
         onChange?.(event);
      }
   };

   useEffect(() => {
      setInputValue(value || "");
   }, [value]);

   return (
      <div className="Input">
         <label>{label}</label>
         <input {...otherProps} pattern={pattern?.source} value={inputValue} onChange={handleValueChanged} />
      </div>
   );
};

export default Input;
