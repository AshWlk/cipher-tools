import React, { ReactElement, useState } from "react";
import { InputProps } from "../input/Input";

export interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
   children: ReactElement<InputProps>[];
   value?: Record<string, string>;
   onValueChange?: (newState: Record<string, string>) => void;
}

const Form = ({ children, value, onValueChange, ...otherProps }: FormProps): ReactElement<FormProps> => {
   const [formState, setFormState] = useState(value);
   const handleStateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newFormState = {
         ...formState,
         [event.target.name]: event.target.value,
      };

      setFormState(newFormState);
      onValueChange?.(newFormState);
   };

   const mapChildren = (children: ReactElement<InputProps>[]): ReactElement<InputProps>[] => {
      return children.map((c) => ({
         ...c,
         props: {
            ...c.props,
            onChange: handleStateChanged,
         },
      }));
   };

   return <form {...otherProps}>{mapChildren(children)}</form>;
};

export default Form;
