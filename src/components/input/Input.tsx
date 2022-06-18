import React from "react";
import "./Input.css";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const Input = (props: InputProps): JSX.Element => {
  return (
    <div className="Input">
      <label>{props.label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
