import css from './TransactionsTable.module.css';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/transaction/transactionOperations';

export const TransactionsTable = function ({ dataArr }) {
  // удаление транзакции
  const dispatch = useDispatch();

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
          </tr>
        </thead>

        <tbody className={css.transactionTableBody}>
          {dataArr.map(item => (
            <tr className={css.transactionBodyLine}>
              <td className={css.transactionsValues}>{item.transactionDate}</td>
              <td className={css.transactionsValues}>{item.type}</td>
              {/* <td className={css.transactionsValues}>{item.categoryId}</td> */}
              <td className={css.transactionsValues}>{item.category}</td>
              <td className={css.transactionsValues}>{item.comment}</td>
              <td className={item.type === 'INCOME' ? css.income : css.expense}>
                {item.amount}
              </td>
              <td className={css.transactionsValues}>{item.balanceAfter}</td>

              {/*---------- удаление транзакции ---------*/}

              <button
                type="button"
                onClick={() => dispatch(deleteTransaction(item.id))}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
