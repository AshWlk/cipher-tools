import React, { ReactElement, useEffect, useState } from "react";
import { filterObjectKeys } from "../../functions/filter-object-keys/filter-object-keys";
import "./Input.css";

export interface InputProps
   extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
   label: string;
}

const Input = (props: InputProps): ReactElement<InputProps> => {
   const [value, setValue] = useState(props.value || "");
   const handleValueChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (!props.pattern || !event.target.value || event.target.value.match(props.pattern)) {
         setValue(event.target.value);
         props.onChange?.(event);
      }
   };

   useEffect(() => {
      setValue(props.value || "");
   }, [props.value]);

   return (
      <div className="Input">
         <label>{props.label}</label>
         <input {...filterObjectKeys(props, "label")} value={value} onChange={handleValueChanged} />
      </div>
   );
};

export default Input;
