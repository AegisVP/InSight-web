import { constants } from 'constants';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  if (isLoggedIn) navigate('/');

  const url = `${constants.apiServerAddress}/user/google`;

  return (
    !isLoggedIn && (
      <>
        <LoginForm />
        <br />
        <a href={url}>Google</a>
      </>
    )
  );
};

export default LoginPage;
