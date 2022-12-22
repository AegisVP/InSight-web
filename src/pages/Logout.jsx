import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import { logoutUser } from 'redux/user/userOperations';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    console.log('logging out');
    if (isLoggedIn) {
      console.log('step 2');
      dispatch(logoutUser);
    }
  });

  // return <Navigate to="/" />;
  return <h1>Logout page</h1>;
};

export default LogoutPage;
