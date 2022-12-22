import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { constants } from 'constants';
import { Loader } from 'components/Loader/Loader';
import { authHeader } from 'redux/utils/authHeader';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/user/userOperations';
import { useAuth } from 'hooks/useAuth';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';

const MainPageSelector = lazy(() => import('pages/MainPageSelector'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const LogoutPage = lazy(() => import('pages/Logout'));
const GoogleAuth = lazy(() => import('pages/GoogleAuth'));
const GoogleRedirect = lazy(() => import('pages/GoogleRedirect'));
const Calculator = lazy(() => import('pages/Calculator'));
const Diary = lazy(() => import('pages/Diary'));
const CommonLayout = lazy(() => import('pages/CommonLayout'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, token } = useAuth();

  console.log({ isRefreshing, token });

  useEffect(() => {
    if (!isRefreshing) return;

    authHeader.set(token);
    dispatch(refreshUser());
  }, [dispatch, isRefreshing, token]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={constants.basePath} element={<CommonLayout />}>
          <Route path="" element={<MainPageSelector />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="register" element={<RegistrationPage />} />

          <Route path="google" element={<GoogleRedirect />} />
          <Route path="google-auth" element={<GoogleAuth />} />

          <Route path="calculator" element={<DailyCaloriesForm />} />
          <Route path="diary" element={<Diary />} />
        </Route>

        <Route path="*" element={<Navigate to={constants.basePath} replace />} />
      </Routes>
    </Suspense>
  );
};

// <Home />
// <LogoMain />
// <LoginPage />
// <RegistrationPage />
