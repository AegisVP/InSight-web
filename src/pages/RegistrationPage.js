import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Wrapper, Container } from './Styles/LoginPage.styled';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();

  console.log({ isLoggedIn });

  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <Container>
      <Wrapper>
        <RegisterForm />
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
