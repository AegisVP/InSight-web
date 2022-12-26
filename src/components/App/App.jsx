import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  //Navigate,
  Route, Routes
} from 'react-router';

import { Loader } from 'components/Loader/Loader';
import { authHeader } from 'redux/utils/authHeader';
import { refreshUser } from 'redux/user/userOperations';
import { useAuth } from 'hooks/useAuth';

const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const GoogleAuth = lazy(() => import('pages/GoogleAuth'));
const GoogleRedirect = lazy(() => import('pages/GoogleRedirect'));
const Calculator = lazy(() => import('pages/Calculator'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));

const CommonLayout = lazy(() => import('pages/CommonLayout'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, token } = useAuth();

  useEffect(() => {
    if (!isRefreshing) return;

    authHeader.set(token);
    dispatch(refreshUser());
  }, [dispatch, isRefreshing, token]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Calculator />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />

          <Route path="google" element={<GoogleRedirect />} />
          <Route path="google-auth" element={<GoogleAuth />} />

          <Route path="calculator" element={<Calculator />} />
          <Route path="diary" element={<DiaryPage />}>
            <Route path=":day" element={<DiaryPage />} />
          </Route>
        </Route>

        {/*<Route path="*" element={<Navigate to="/" />} />*/}
      </Routes>
    </Suspense>
  );
};
