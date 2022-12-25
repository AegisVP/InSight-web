// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';

import {
  Wrapper,
  Layer,
  Leaves,
  Banana,
  Strawberry,
  MainPageHeaderStyled,
  MainPageFormContainer,
} from 'components/MainPage/MainPageStyled';
import { Outlet } from 'react-router';
import { selectUserIsLoggedIn } from 'redux/selectors';
import { NavHeader } from 'components/NavHeader/NavHeader';
import { AuthHeader } from 'components/AuthHeader/AuthHeader';

const MainPageSelector = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <Wrapper>
      <MainPageHeaderStyled>
        [LOGO] - - [Calculator] [Diary]
        {isLoggedIn ? <NavHeader /> : <AuthHeader />}
      </MainPageHeaderStyled>
      <MainPageFormContainer>
        <Outlet />
      </MainPageFormContainer>
      <Strawberry />
      <Banana />
      <Leaves />
      <Layer />
    </Wrapper>
  );
};

export default MainPageSelector;
