import { useSelector } from 'react-redux';

import { NavHeader } from 'components/NavHeader/NavHeader';
import { AuthHeader } from 'components/AuthHeader/AuthHeader';
import { HeaderContainer } from './MainHeader.styled';
import { selectUserIsLoggedIn } from 'redux/selectors';

export const MainHeader = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  return (
    <>
      <HeaderContainer>
        [LOGO] - - [Calculator] [Diary]
        {isLoggedIn ? <NavHeader /> : <AuthHeader />}
      </HeaderContainer>
    </>
  );
};
