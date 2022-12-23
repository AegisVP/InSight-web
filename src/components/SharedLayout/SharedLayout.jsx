import { useSelector } from 'react-redux';

import { MainHeader } from 'components/MainHeader/MainHeader';
import { Outlet } from 'react-router-dom';
import { HeaderBar, HeaderBarIsLogedIn } from '../../pages/Styles/SharedLayout.styled';
import { selectUserIsLoggedIn } from 'redux/selectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  
  return (
    <div>
      {isLoggedIn ? (
        <HeaderBarIsLogedIn>
          <MainHeader />
        </HeaderBarIsLogedIn>
      ) : (
        <HeaderBar>
          <MainHeader />
        </HeaderBar>
      )}
      <div style={{ outline: '2px solid green' }}>
        <Outlet />
      </div>
    </div>
  );
};
