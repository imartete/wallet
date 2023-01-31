import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import OpenModalTransitionBtn from 'components/OpenModalTransitionBtn/OpenModalTransitionBtn';
import { Transactions } from 'components/TransactionsTable/Transactions';
// import { useSelector } from 'react-redux';
import { useModals } from 'hooks/useModal';

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
  const { isModalAdd } = useModals();
  return (
    <>
      {isModalAdd && <ModalAddTransaction />}
      <Transactions dataArr={dataArr} />
      <OpenModalTransitionBtn />
    </>
  );
};

export default HomePage;
