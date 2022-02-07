import { useState } from "react";

const useForm = <T>(  initialValues: T ) => {

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target;
    setFormValues({ 
      ...formValues, 
      [name] : value 
    });
  }

  const reset = () => {
    setFormValues(initialValues);
  }


  return {
    ...formValues,
    formValues,
    handleChange,
    reset
  };
};

export default useForm;
