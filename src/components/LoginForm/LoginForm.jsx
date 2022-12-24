import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/user/userOperations';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    dispatch(loginUser({ email, password }));
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <br />
      <br />
      <label>
        Pass:
        <input type="password" name="password" />
      </label>
      <br />
      <br />
      <button type="submit">Login</button> &nbsp;
      <a href="./register">Register</a>
    </form>
  );
};
