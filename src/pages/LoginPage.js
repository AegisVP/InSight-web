import { constants } from 'constants';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router';
import styled from 'styled-components';

const LoginPage = () => {
  const { isLoggedIn } = useAuth();

  const url = `${constants.apiServerAddress}/user/google`;

  return !isLoggedIn ? (
    <LoginPageStyled>
      <LoginForm />
      <br />
      <a href={url}>Google</a>
    </LoginPageStyled>
  ) : (
    <Navigate to="/" />
  );
};

const LoginPageStyled = styled.div`
  position: absolute;
  top: calc(100% / 5.7);
  margin-left: 16px;

  /* width: 100%;
  height: 100vh; */
`;

export default LoginPage;
