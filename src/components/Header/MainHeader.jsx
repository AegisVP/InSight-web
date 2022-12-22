import { useSelector } from 'react-redux';

import { NavHeader } from 'components/Header/NavHeader/NavHeader';
import { AuthHeader } from 'components/Header/AuthHeader/AuthHeader';
import { HeaderContainer } from './MainHeader.styled';

export const MainHeader = () => {
  const isLoggedIn = useSelector(state => state.auth);
  return (
    <>
      <HeaderContainer>{isLoggedIn ? <NavHeader /> : <AuthHeader />}</HeaderContainer>
    </>
  );
};
