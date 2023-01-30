import { Transactions } from 'components/TransactionsTable/Transactions';
import OpenModalTransitionBtn from 'components/OpenModalTransitionBtn/OpenModalTransitionBtn';

const dataArr = [
  {
    id: 'string',
    transactionDate: '05.11.19',
    type: 'INCOME',
    categoryId: 'string',
    userId: 'string',
    comment: 'ddddddddddd',
    amount: 52,
    balanceAfter: 0,
  },
  {
    id: 'string1',
    transactionDate: 'string',
    type: 'EXPENSE',
    categoryId: 'string',
    userId: 'string',
    comment: 'string',
    amount: 10,
    balanceAfter: 0,
  },
];

const HomePage = () => {
  return <Transactions dataArr={dataArr} />;
};

export default HomePage;
