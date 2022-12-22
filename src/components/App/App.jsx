import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { constants } from 'constants';
import Loader from 'components/Loader/Loader';

const MainPageSelector = lazy(() => import('pages/MainPageSelector'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const LogoutPage = lazy(() => import('pages/Logout'));
const GoogleAuth = lazy(() => import('pages/GoogleAuth'));
const Calculator = lazy(() => import('pages/Calculator'));
const Diary = lazy(() => import('pages/Diary'));
const CommonLayout = lazy(() => import('pages/CommonLayout'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={constants.basePath} element={<CommonLayout />}>
          <Route path="" element={<MainPageSelector />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="register" element={<RegistrationPage />} />

          <Route path="google-auth" element={<GoogleAuth />} />

          <Route path="calculator" element={<Calculator />} />
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
