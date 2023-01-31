import { Box } from '@chakra-ui/react';
import React from 'react';
import { BalanceWrap, BalanceTitle, BalanceText } from './Balance.styled';
import { useAuth } from 'hooks/useAuth';

const Balance = () => {
  const { balance } = useAuth();

  return (
    <BalanceWrap>
      <BalanceTitle>Your balance</BalanceTitle>
      <Box display="flex" alignItems="center">
        <BalanceText>
          <BalanceText> &#8372; </BalanceText> {balance}
        </BalanceText>
      </Box>
    </BalanceWrap>
  );
};

export default Balance;
