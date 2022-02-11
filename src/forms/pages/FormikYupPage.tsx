import { useFormik } from 'formik';
import * as yup from 'yup';
import '../styles/styles.css';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName : yup.string().required(),
  email    : yup.string().email().required(),
});

const FormikYupPage = () => {


  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: schema,
  })


  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={handleSubmit} autoComplete='off'>
        <label htmlFor="firstName">First Name</label>
        <input 
          { ...getFieldProps('firstName') }
          type="text" 
        />
        { errors.firstName && touched.firstName && <span>{ errors.firstName }</span> }

        <label htmlFor="lastName">Last Name</label>
        <input
          { ...getFieldProps('lastName') }
          type="text" 
        />
        { errors.lastName && touched.lastName && <span>{ errors.lastName }</span> }

        <label htmlFor="email">Email</label>
        <input 
          { ...getFieldProps('email') }
          type="email" 
        />
        { errors.email && touched.email &&  <span>{ errors.email }</span> }

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
