import { Outlet } from 'react-router-dom';
import { HeaderBar } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <HeaderBar>HEADER BAR</HeaderBar>
      
      <Outlet />
    </>
  );
};
