import { ErrorMessage, useField } from "formik"

interface MyTextInputProps {
  label: string
  name: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  [key: string]: any
}

const MyTextInput = ( { label, ...props }: MyTextInputProps ) => {

  const [ field, meta ] = useField(props)

  return (
    <>
      <label htmlFor={ props.id || props.name } >{ label }</label>
      <input className="text-input" type="text" {...field} {...props} />
      <ErrorMessage name={props.name} component='span'/>
      {/* { meta.touched && meta.error && (
        <div className="error">{ meta.error }</div>
        )} 
      */}
    </>
  )
}

export default MyTextInput