import { NavHeader } from 'components/NavHeader/NavHeader';
import { AuthHeader } from 'components/AuthHeader/AuthHeader';
import { HeaderContainer } from './MainHeader.styled';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const MainHeader = () => {
  const isLoggedIn = useAuth();
  return (
    <>
      <HeaderContainer>
        <NavLink to={'calculator'}>[CALCULATOR]</NavLink> - -<NavLink to={'diary'}>[DIARY]</NavLink>
        <NavHeader /> {isLoggedIn && <AuthHeader />}
      </HeaderContainer>
    </>
  );
};
