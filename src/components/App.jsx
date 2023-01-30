import { Navigate, Route, Routes } from 'react-router-dom';
import StatisticsPage from '../pages/StatisticsPage';
import HomePage from '../pages/HomePage';
import SharedLayout from './SharedLayout/SharedLayout';
import CurrencyPage from 'pages/CurrencyPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/sign-in" component={<HomePage />} />
          }
        />

        <Route
          path="statistics"
          element={
            <PrivateRoute
              redirectTo="/sign-in"
              component={<StatisticsPage />}
            />
          }
        />
        <Route
          path="currency"
          element={
            <PrivateRoute redirectTo="/sign-in" component={<CurrencyPage />} />
          }
        />
      </Route>
      <Route
        path="/sign-in"
        element={<RestrictedRoute redirectTo="/" component={<SignInPage />} />}
      />
      <Route
        path="/sign-up"
        element={<RestrictedRoute redirectTo="/" component={<SignUpPage />} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
