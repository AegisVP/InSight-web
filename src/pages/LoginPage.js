import { constants } from 'constants';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Wrapper, Container } from './Styles/LoginPage.styled';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <Container>
      <Wrapper>
        <LoginForm />
        <br />
        <a href={`${constants.apiServerAddress}/user/google`}>Google</a>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
