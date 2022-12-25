import { useSelector } from 'react-redux';

import { MainHeader } from 'components/MainHeader/MainHeader';
<<<<<<< Updated upstream
import { Outlet } from 'react-router-dom';
import { HeaderBarIsLogedIn } from './SharedLayout.styled';
=======
import { NavLink, Outlet } from 'react-router-dom';
import { HeaderBar, HeaderBarIsLogedIn } from '../../pages/Styles/SharedLayout.styled';
>>>>>>> Stashed changes
import { selectUserIsLoggedIn } from 'redux/selectors';
import MainPageSelector from 'components/MainPage/MainPageSelector';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);

  return (
    <>
      <NavLink to={'diary'}>diary</NavLink>
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
