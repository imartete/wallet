import Chart from 'components/Chart/Chart';
import ExpensesTable from 'components/ExpensesTable/ExpensesTable';

export const StatisticsList = function () {
  return (
    <>
      <div>
        <Chart />
      </div>
      <div>
        <ExpensesTable />
      </div>
    </>
  );
};
