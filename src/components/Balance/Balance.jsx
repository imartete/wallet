import React from 'react';
import { BalanceWrap, BalanceTitle, BalanceText } from './Balance.styled';

const Balance = () => {
  const { balance } = useAuth();

  return (
    <BalanceWrap>
      <BalanceTitle>Your balance</BalanceTitle>

    </BalanceWrap>
  );
};

export default Balance;
