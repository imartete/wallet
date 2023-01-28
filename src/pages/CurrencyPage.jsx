import { Box } from '@chakra-ui/react';

import { Currency } from 'components/Currency/Currency';

const CurrencyPage = () => {
  return (
    <Box>
      <Currency />
    </Box>
  );
};

// const CurrencyPage = () => {
//   const MobilePage = useMedia('(max-width: 767px)');
//   if (MobilePage) return <Currency />;
//   return <Navigate to="/" />;
// };

export default CurrencyPage;
