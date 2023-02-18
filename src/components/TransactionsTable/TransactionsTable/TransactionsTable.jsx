import css from './TransactionsTable.module.css';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import { isModalUpdateTransaction } from 'redux/modal/modalSlice';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { EditTransaction } from 'redux/transaction/transactionSlice';
import { numberNormalize } from 'helpers/numberNormalize';
import { Flex } from '@chakra-ui/react';

export const TransactionsTable = function ({ dataArr }) {
  // удаление транзакции
  const dispatch = useDispatch();
  const onClickUpdate = transaction => {
    dispatch(isModalUpdateTransaction(true));
    dispatch(EditTransaction(transaction));
  };

  return (
    <section className={css.transactionSection}>
      <table className={css.transactionTable}>
        <thead>
          <tr className={css.transactionTableHead}>
            <th className={css.transactionTitles}>Date</th>
            <th className={css.transactionTitles}>Type</th>
            <th className={css.transactionTitles}>Category</th>
            <th className={css.transactionTitles}>Comment</th>
            <th className={css.transactionTitles}>Sum</th>
            <th className={css.transactionTitles}>Balance</th>
            <th className={css.transactionTitles}>Edit</th>
          </tr>
        </thead>

        <tbody className={css.transactionTableBody}>
          {dataArr.map(item => (
            <tr className={css.transactionBodyLine}>
              <td className={css.transactionsValues}>{item.transactionDate}</td>
              <td className={css.transactionsValues}>{item.type}</td>
              <td className={css.transactionsValues}>{item.category}</td>
              <td className={css.transactionsValues}>{item.comment}</td>
              <td className={item.type === '+' ? css.income : css.expense}>
                {numberNormalize(item.amount)}
              </td>
              <td className={css.transactionsValues}>
                {numberNormalize(item.balanceAfter)}
              </td>
              <td>
                <Flex
                  direction="column"
                  minWidth="max-content"
                  alignItems="center"
                  gap="2"
                  pt="3"
                  pb="3"
                >
                  <DeleteIcon
                    boxSize="20px"
                    color="black"
                    onClick={() => dispatch(deleteTransaction(item))}
                  />
                  <EditIcon
                    boxSize="20px"
                    color="black"
                    onClick={() => onClickUpdate(item)}
                  />
                </Flex>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
