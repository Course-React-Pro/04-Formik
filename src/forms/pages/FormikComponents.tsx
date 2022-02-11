import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as yup from 'yup';
import '../styles/styles.css';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName : yup.string().required(),
  email    : yup.string().email().required(),
  terms    : yup.boolean().oneOf([true]).required(),
  jobType  : yup.string().notOneOf(['Contract']).required(),
});

const FormikComponents = () => {


  return (
    <div>
      <h1>Formik Components</h1>
      <Formik 
        initialValues={{
          firstName : '',
          lastName  : '',
          email     : '',
          terms     : false,
          jobType   : '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
        validationSchema={schema}
       >
        {
          () => (
            <Form noValidate autoComplete='off'>
              <label htmlFor="firstName">First Name</label>
              <Field
                name="firstName"
                type="text"
              />
              <ErrorMessage name="firstName" component='span' />

              <label htmlFor="lastName">Last Name</label>
              <Field
                name="lastName"
                type="text"
              />
              <ErrorMessage name="lastName" component='span' />

              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
              />
              <ErrorMessage name="email" component='span' />


              <label htmlFor="jobType">Job type</label>
              <Field
                as="select"
                name="jobType"
              >
                <option value="">Select</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
              </Field>
              <ErrorMessage name="jobType" component='span' />

              <label>
                <Field
                  name="terms"
                  type="checkbox"
                />
                I agree to the terms and conditions
              </label>
              <ErrorMessage name="terms" component='span' />

              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>


    </div>
  );
};

export default FormikComponents;
