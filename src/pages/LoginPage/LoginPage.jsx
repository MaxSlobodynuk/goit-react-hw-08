import LoginForm from '../../components/LoginForm/LoginForm';
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div >
      <h2 className={css.title}>Please, log in</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage