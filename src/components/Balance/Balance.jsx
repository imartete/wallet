import React, { useEffect } from 'react';
import { BalanceWrap, BalanceTitle, BalanceText } from './Balance.styled';
import { useAuth } from 'hooks/useAuth';

const Balance = () => {
  const { balance } = useAuth();

  useEffect(() => {
    if (!balance || balance.slice(0, 1) !== '-') return;
  }, [balance]);

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
