import { Formik, Form } from 'formik';
import * as yup from 'yup';
import MyCheckbox from '../components/MyCheckbox';
import MySelect from '../components/MySelect';
import MyTextInput from '../components/MyTextInput';
import '../styles/styles.css';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName : yup.string().required(),
  email    : yup.string().email().required(),
  terms    : yup.boolean().oneOf([true]).required(),
  jobType  : yup.string().notOneOf(['Contract']).required(),
});

const FormikAbstraction = () => {


  return (
    <div>
      <h1>Formik Abstraction</h1>
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

              <MyTextInput 
                label="First Name"
                name="firstName"
                placeholder="First Name"
                type="text"
              />

              <MyTextInput 
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
                type="text"
              />

              <MyTextInput 
                label="Email"
                name="email"
                placeholder="Email"
                type="email"
              />

              <MySelect 
                label="Job Type"
                name="jobType"
              >
                <option value="">Select a job type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
              </MySelect>


              <MyCheckbox 
                label='I accept the terms and conditions'
                name='terms'
              />

              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>


    </div>
  );
};

export default FormikAbstraction;
