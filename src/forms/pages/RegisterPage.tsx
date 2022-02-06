import useForm from '../hooks/useForm';
import '../styles/styles.css';

const RegisterPage = () => {

  const { formValues, handleChange } = useForm()
  const { name, email, password, confirmPassword } = formValues

  const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitted')
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form 
        autoComplete='off'
        onSubmit={ handleSubmit }
      >
        <input 
          type="text" 
          placeholder="name"
          name="name"
          onChange={ handleChange }
          value={ name }
        />
        <input 
          type="email" 
          placeholder="email"
          name="email"
          onChange={ handleChange }
          value={ email }
        />
        <input 
          type="password" 
          placeholder="password"
          name="password"
          onChange={ handleChange }
          value={ password }
        />
        <input 
          type="password" 
          placeholder="repeat password"
          name="confirmPassword"
          onChange={ handleChange }
          value={ confirmPassword }
        />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
