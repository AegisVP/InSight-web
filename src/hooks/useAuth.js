import { useSelector } from 'react-redux';
import { selectDiet, selectUserAuth } from 'redux/selectors';

export const useAuth = () => {
  const { name, email, token, params } = useSelector(selectUserAuth);
  console.log({ name, params });
  const  age  = params?.age;
  const { dailyCalories } = useSelector(selectDiet);
  const isLoggedIn = token !== null && name !== null;
  const isRefreshing = token !== null && name === null;
  const isParamsEntered = age !== 0 && dailyCalories !== 0 ? true : false;

  return {
    isLoggedIn,
    isRefreshing,
    isParamsEntered,
    token,
    name,
    email,
  };
};
