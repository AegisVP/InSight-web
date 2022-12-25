import { useSelector } from 'react-redux';

import { MainHeader } from 'components/MainHeader/MainHeader';
import { Outlet } from 'react-router-dom';
import { HeaderBarIsLogedIn } from './SharedLayout.styled';
import { selectUserIsLoggedIn } from 'redux/selectors';
import MainPageSelector from 'components/MainPage/MainPageSelector';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <HeaderBarIsLogedIn>
          <MainHeader />
          <Outlet />
        </HeaderBarIsLogedIn>
      ) : (
        <MainPageSelector />
      )}
    </>
  );
};
