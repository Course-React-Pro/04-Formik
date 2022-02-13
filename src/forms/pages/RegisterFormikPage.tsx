import { ErrorMessage, Field, Form, Formik } from 'formik';
import '../styles/styles.css';
import * as yup from 'yup';

const schema = yup.object().shape({
  name            : yup.string().min(2).max(15).required(),
  email           : yup.string().email().required(),
  password        : yup.string().min(6).required(),
  confirmPassword : yup.string().oneOf([yup.ref('password')], 'passwords must match').required(),
});


const RegisterFormikPage = ( ) => {

  return (
    <div>
      <h1>Register Page</h1>
      <Formik 
        initialValues = {{
          name            : '',
          email           : '',
          password        : '',
          confirmPassword : '',
        }} 
        validationSchema = { schema }
        onSubmit = {(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ errors, resetForm }) => (
            <Form>
              <Field 
                type="text" 
                name="name" 
                placeholder="Name"
              />
              <ErrorMessage name="name" component='span' />

              <Field 
                type="email" 
                name="email" 
                placeholder="Email" 
              />
              <ErrorMessage name="email" component='span' />

              <Field 
                type="password" 
                name="password" 
                placeholder="Password"
              />
              <ErrorMessage name="password" component='span' />

              <Field 
                type="password" 
                name="confirmPassword" 
                placeholder="Confirm Password"
              />
              <ErrorMessage name="confirmPassword" component='span' />
              <button type="submit">
                Register
              </button>

              <button 
                type="button"
                onClick={() => {
                  resetForm();
                }}
              >
                Reset
              </button>
            </Form>
          )}
        </Formik>

    </div>
  );
};

export default RegisterFormikPage;
