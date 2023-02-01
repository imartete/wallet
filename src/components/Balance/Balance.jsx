import React from 'react';
import { BalanceWrap, BalanceTitle, BalanceText } from './Balance.styled';
import { useAuth } from 'hooks/useAuth';

const Balance = () => {
  const { balance } = useAuth();

  return (
    <BalanceWrap>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceText fontFamily="Poppins, sans-serif">
        {' '}
        &#8372; {balance}
      </BalanceText>
    </BalanceWrap>
  );
};

export default Balance;
