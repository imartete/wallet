import React from 'react';
import { BalanceWrap, BalanceTitle, BalanceText } from './Balance.styled';
import { Box } from '@chakra-ui/react';

const Balance = () => {
  return (
    <BalanceWrap>
      <BalanceTitle>Your balance</BalanceTitle>
      <Box display="flex" alignItems="center">
        <BalanceText> &#8372; 20 000.00</BalanceText>
      </Box>
    </BalanceWrap>
  );
};

export default Balance;
