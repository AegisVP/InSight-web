import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/user/userOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    dispatch(registerUser({ name, email, password }));
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <br />
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
      <button type="submit">Register</button> &nbsp;
      <a href="./login">Login</a>
    </form>
  );
};
