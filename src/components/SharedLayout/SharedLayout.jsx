import { MainHeader } from 'components/MainHeader/MainHeader';
import { Outlet } from 'react-router-dom';
import { HeaderBar } from '../../pages/Styles/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <HeaderBar>
        <MainHeader />
      </HeaderBar>

      <Outlet />
    </>
  );
};
