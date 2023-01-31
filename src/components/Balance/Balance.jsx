import React from 'react';
import { BalanceWrap, BalanceTitle, BalanceText } from './Balance.styled';
import { useAuth } from 'hooks/useAuth';
const Balance = () => {
  const { balance } = useAuth();

  return (
    <BalanceWrap>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceText>
        <BalanceText> &#8372; </BalanceText> {balance}
      </BalanceText>
    </BalanceWrap>
  );
};

export default Balance;
