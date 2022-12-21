// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const MainPageSelector = () => {
  // const isUserLoggedin = useSelector();

  return <Navigate to={'calculator'} />;
};

export default MainPageSelector;
