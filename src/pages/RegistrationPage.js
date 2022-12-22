import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  console.log({ isLoggedIn });

  if (isLoggedIn) navigate('/');

  return <RegisterForm />;
};

export default LoginPage;
