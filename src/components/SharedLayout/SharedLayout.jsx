import { MainHeader } from 'components/Header/MainHeader';
import { Outlet } from 'react-router-dom';
import { HeaderBar } from './SharedLayout.styled';

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
