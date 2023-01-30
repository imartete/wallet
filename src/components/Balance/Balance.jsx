import React from 'react';
import { BalanceWrap, BalanceTitle, BalanceText } from './Balance.styled';
const Balance = () => {
  return (
    <BalanceWrap>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceText>
        <BalanceText> &#8372; </BalanceText> 20 000.00
      </BalanceText>
    </BalanceWrap>
  );
};

export default Balance;
