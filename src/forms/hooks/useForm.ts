import { useState } from "react";

const useForm = ( ) => {

  const [formValues, setFormValues] = useState({
    name            : '',
    email           : '',
    password        : '',
    confirmPassword : '',
  });

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name] : value });
  }


  return {
    formValues,
    handleChange,
  };
};

export default useForm;
