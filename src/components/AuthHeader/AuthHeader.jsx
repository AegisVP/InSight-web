import { LinkSignIn, LinkRegistration, HeaderContainer } from './AuthHeader.styled';
import { LogoMain } from 'components/Logo/Logo';

export const AuthHeader = () => {
  return (
    <HeaderContainer>
      <LogoMain />
      <LinkSignIn to={'login'}>SIGN IN</LinkSignIn>
      <LinkRegistration to={'register'}>REGISTRATION</LinkRegistration>
    </HeaderContainer>
  );
};
