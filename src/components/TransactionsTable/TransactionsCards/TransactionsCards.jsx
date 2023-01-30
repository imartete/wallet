import css from './TransactionsCards.module.css';

export const TransactionsCards = function ({ dataArr }) {
  return dataArr.map(item => (
    <ul
      className={`${css.transactionList} ${
        item.type === 'INCOME' ? css.income : css.expense
      }`}
    >
      <li className={css.transactionItem} key={item.id}>
        <span className={css.transactionName} as="span">
          Date
        </span>
        <span className={css.transactionValue} as="span">
          {item.transactionDate}
        </span>
      </li>
      <li className={css.transactionItem} key={item.id}>
        <span className={css.transactionName} as="span">
          Type
        </span>
        <span className={css.transactionValue} as="span">
          {item.type}
        </span>
      </li>
      <li className={css.transactionItem} key={item.id}>
        <span className={css.transactionName} as="span">
          Category
        </span>
        <span className={css.transactionValue} as="span">
          {item.categoryId}
        </span>
      </li>
      <li className={css.transactionItem} key={item.id}>
        <span className={css.transactionName} as="span">
          Comment
        </span>
        <span className={css.transactionValue} as="span">
          {item.comment}
        </span>
      </li>
      <li className={css.transactionItem} key={item.id}>
        <span className={css.transactionName} as="span">
          Sum
        </span>
        <span className={`${css.transactionValue} ${css.balance}`} as="span">
          {item.amount}
        </span>
      </li>
      <li className={css.transactionItem} key={item.id}>
        <span className={css.transactionName} as="span">
          Balance
        </span>
        <span className={css.transactionValue} as="span">
          {item.balanceAfter}
        </span>
      </li>
    </ul>
  ));
};
