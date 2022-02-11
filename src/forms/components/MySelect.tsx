import { useField } from "formik"

interface MyTextInputProps {
  label: string
  name: string
  placeholder?: string
  [key: string]: any
}

const MySelect = ( { label, ...props }: MyTextInputProps ) => {

  const [ field, meta ] = useField(props)

  return (
    <>
      <label htmlFor={ props.id || props.name } >{ label }</label>
      <select className="text-input" {...field} {...props} />
      { meta.touched && meta.error && (
        <div className="error">{ meta.error }</div>
      )}
    </>
  )
}

export default MySelect