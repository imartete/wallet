import { Navigate, Route, Routes } from 'react-router-dom';
import StatisticsPage from '../pages/StatisticsPage';
import HomePage from '../pages/HomePage';
import SharedLayout from './SharedLayout/SharedLayout';
import CurrencyPage from 'pages/CurrencyPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="statistic" element={<StatisticsPage />} />
        <Route path="currency" element={<CurrencyPage />} />
      </Route>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
