import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import OpenModalTransitionBtn from 'components/OpenModalTransitionBtn/OpenModalTransitionBtn';
import { Transactions } from 'components/TransactionsTable/Transactions';

import { useMedia } from 'components/Media/useMedia';
import { useModals } from 'hooks/useModal';
import Balance from 'components/Balance/Balance';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTransactions } from 'hooks/useTransactions';
import {
  fetchCategories,
  fetchTransactions,
} from 'redux/transaction/transactionOperations';

const dataArr = [
  {
    id: 'string1',
    transactionDate: '05.11.19',
    type: 'INCOME',
    categoryId: 'string',
    userId: 'string',
    comment: 'ddddddddddd',
    amount: 52,
    balanceAfter: 0,
  },
  {
    id: 'string2',
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
  // запрос на получение всех транзакций
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch]);

  // получение массива транзакций со стейта
  const { transactions, categories } = useTransactions();

  // Добавление наименования транзакции в новый массив транзакций
  let newTransactions = [];
  for (let i = 0; i < transactions.length; i += 1) {
    for (let j = 0; j < categories.length; j += 1) {
      if (categories[j].id === transactions[i].categoryId) {
        newTransactions[i] = {
          ...transactions[i],
          category: categories[j].name,
        };
      }
    }
  }

  const { isMobile } = useMedia();
  const { isModalAdd } = useModals();
  return (
    <>
      {isModalAdd && <ModalAddTransaction />}
      {isMobile && <Balance />}
      {/* <Transactions dataArr={dataArr} /> */}
      <Transactions dataArr={newTransactions} />
      <OpenModalTransitionBtn />
    </>
  );
};

export default HomePage;
