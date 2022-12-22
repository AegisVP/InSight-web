import { useSelector } from 'react-redux';
import { selectUserAuth } from 'redux/selectors';

export const useAuth = () => {
  const { name, email, token } = useSelector(selectUserAuth);
  const isLoggedIn = token !== null && name !== null;
  const isRefreshing = token !== null && name === null;

  return {
    isLoggedIn,
    isRefreshing,
    token,
    name,
    email,
  };
};
