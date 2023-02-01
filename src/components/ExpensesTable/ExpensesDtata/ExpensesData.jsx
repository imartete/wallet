import { useSelector } from 'react-redux';
import transactionSelectors from 'redux/transaction/transactionSelectors';
import { Data, CatData, SumData } from './ExpensesData.styled';
import { ImStop2 } from 'react-icons/im';

const ExpensesData = () => {
  const statistics = useSelector(transactionSelectors.getStatistics);
  const { categoriesSummary } = statistics;
  // console.log(categoriesSummary);

  if (categoriesSummary.length) {
    return categoriesSummary.map(category => {
      const { name, total } = category;

      return (
        <Data key={name}>
          <CatData>
            <ImStop2 color="#FED057" size="24px" title="colored box" />
            {name}
          </CatData>
          <SumData>{total}</SumData>
        </Data>
      );
    });
  }
};

export default ExpensesData;
