import { useFormik } from 'formik';
import * as yup from 'yup';
import '../styles/styles.css';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName : yup.string().required(),
  email    : yup.string().email().required(),
});

const FormikYupPage = () => {


  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
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
          type="text" 
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        { errors.firstName && touched.firstName && <span>{ errors.firstName }</span> }

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          onBlur={handleBlur}
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        { errors.lastName && touched.lastName && <span>{ errors.lastName }</span> }

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          onBlur={handleBlur}
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        { errors.email && touched.email &&  <span>{ errors.email }</span> }

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
