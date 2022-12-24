// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';

import { Wrapper, Layer, Leaves, Banana, Strawberry } from 'components/MainPage/MainPageStyled';
import { MainHeader } from 'components/MainHeader/MainHeader';
import { selectUserIsLoggedIn } from 'redux/selectors';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import LoginPage from 'pages/LoginPage';

const MainPageSelector = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <Wrapper>
      <MainHeader />
      {isLoggedIn ? <CalculatorCalorieForm /> : <LoginPage />}
      <Strawberry />
      <Banana />
      <Leaves />
      <Layer />
    </Wrapper>
  );
};

export default MainPageSelector;
