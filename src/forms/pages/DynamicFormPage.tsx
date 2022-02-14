import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import data from '../data/custom-form.json'

const initialValues: { [key: string]: any } = {}
const schemaValidate: { [key: string]: any } = {}


for (const input of data) {
  initialValues[input.name] = input.value

  if (!input.validation) continue
  
  let schema = Yup.string()

  for (const rule of input.validation) {
    if(rule.type === 'required'){
      schema = schema.required('Campo requerido')
    }
    if(rule.type === 'minLength'){
      schema = schema.min( (rule as any).value , `Mínimo de caracteres ${(rule as any).value}`)
    }
    if(rule.type === 'email'){
      schema = schema.email('Email inválido')
    }
  }
  schemaValidate[input.name] = schema
}


const DynamicFormPage = () => {

  return (
    <div>
      <h1>Dynamic Form Page</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
        }}
        validationSchema={Yup.object(schemaValidate)}
      >
        {({ isSubmitting }) => (
          <Form noValidate autoComplete='off'>
            {
              data.map((item, index) => {
                if(item.type === 'input' || item.type === 'password' || item.type === 'email'){
                  return (
                    <>
                      <Field 
                        key={index} 
                        name={item.name} 
                        type={item.type} 
                        placeholder={item.placeholder} 
                      />
                      <ErrorMessage name={item.name} component='span' />
                    </>
                  )
                }else if ( item.type === 'select' ){
                  return (
                    <>
                      <Field
                      as="select"
                      key={index} 
                      name={item.name}
                      >
                        <option value="" disabled>Select option</option> 
                        {item.options && item.options.map((option, index) => {
                          return (
                            <>
                              <option key={index} value={option.id}>{option.name}</option>
                            </>
                          )
                        })}
                      </Field>
                      <ErrorMessage name={item.name} component='span' />
                    </>

                  )
                }
                
              })
            }

            <button type="submit" >Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DynamicFormPage