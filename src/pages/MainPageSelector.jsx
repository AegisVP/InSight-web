// import { useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router';

const MainPageSelector = () => {
  const { isLoggedin } = useAuth();

  return <Navigate to={isLoggedin ? 'calculator' : 'login'} />;
};

export default MainPageSelector;
