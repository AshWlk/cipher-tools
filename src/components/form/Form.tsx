import React, { ReactElement, useState } from "react";
import { InputProps } from "../input/Input";

export interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
   children: ReactElement<InputProps>[];
   state?: Record<string, string>;
   onStateChange?: (newState: Record<string, string>) => void;
}

const Form = (props: FormProps): JSX.Element => {
   const [formState, setFormState] = useState(props.state);
   const handleStateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newFormState = {
         ...formState,
         [event.target.name]: event.target.value,
      };

      setFormState(newFormState);
      props.onStateChange?.(newFormState);
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

   return <form {...props}>{mapChildren(props.children)}</form>;
};

export default Form;
