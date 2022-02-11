import { ErrorMessage, useField } from "formik"

interface MyTextInputProps {
  label: string
  name: string
  [key: string]: any
}

const MyCheckbox = ( { label, ...props }: MyTextInputProps ) => {

  const [ field, meta ] = useField({...props, type: 'checkbox'})

  return (
    <>
      <label >
        <input type="checkbox" {...field} {...props} />
        { label }
      </label>
      <ErrorMessage name={props.name} component='span'/>
      {/* { 
        meta.touched && meta.error && (
          <div className="error">{ meta.error }</div>
        )
      } */}
    </>
  )
}

export default MyCheckbox