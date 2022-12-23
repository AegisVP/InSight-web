import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import { selectDiet, selectUserParams } from 'redux/selectors';

const MainPageSelector = () => {
  const { isLoggedIn } = useAuth();
  const { age } = useSelector(selectUserParams);
  const { dailyCalories } = useSelector(selectDiet);
  const isParamsEntered = age !== 0 && dailyCalories !== 0 ? true : false;

  return <Navigate to={isParamsEntered ? (isLoggedIn ? 'diary' : 'login') : 'calculator'} />;
};

export default MainPageSelector;
