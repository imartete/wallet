import { Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Currency } from 'components/Currency/Currency';

const CurrencyPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  if (isMobile) return <Currency />;
  return <Navigate to="/" />;
};

export default CurrencyPage;
