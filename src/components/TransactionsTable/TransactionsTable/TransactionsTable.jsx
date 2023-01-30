import css from './TransactionsTable.module.css';

export const TransactionsTable = function ({ dataArr }) {
  dataArr.map(item => (
    <section
      className={`${css.transactionList} ${
        item.type === 'INCOME' ? css.income : css.expense
      }`}
    >
      <table className={css.transactionTable}>
        <thead className={css.transactionTableHead}>
          <tr>
            <th className={css.transactionTitles}>Date</th>
            <th className={css.transactionTitles}>Type</th>
            <th className={css.transactionTitles}>Category</th>
            <th className={css.transactionTitles}>Comment</th>
            <th className={css.transactionTitles}>Sum</th>
            <th className={css.transactionTitles}>Balance</th>
          </tr>
        </thead>
        <tbody className={css.transactionTableBody}>
          <tr>
            <td className={css.transactionsValues}>{item.transactionDate}</td>
            <td className={css.transactionsValues}>{item.type}</td>
            <td className={css.transactionsValues}>{item.categoryId}</td>
            <td className={css.transactionsValues}>{item.comment}</td>
            <td className={css.transactionsValuesSum}>{item.amount}</td>
            <td className={css.transactionsValues}>{item.balanceAfter}</td>
          </tr>
        </tbody>
      </table>
    </section>
  ));
};
