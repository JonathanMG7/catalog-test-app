import './Login.css'
import LoginForm from '../../components/loginForm/LoginForm';

const Login = () => {
  return (
    <div className='login-page'>
      <section className='login-form-wrapper'>
        <LoginForm />
      </section>
    </div>
  )
}

export default Login