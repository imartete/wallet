import transactionSelectors from 'redux/transaction/transactionSelectors';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';

const { getStatistics } = transactionSelectors;

export function DiagramTab() {
  const summary = useSelector(getStatistics);
  console.log(summary);

  return (
    <div>
      <Filter />
    </div>
  );
}
