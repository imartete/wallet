import {
  Table,
  Category,
  Sum,
  Data,
  CatData,
  SumData,
  CatTotal,
  ExpTotal,
  IncTotal,
} from './ExpensesTable.styled';

import { ImStop2 } from 'react-icons/im';

const ExpensesTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <Category>Category</Category>
          <Sum>Sum</Sum>
        </tr>
      </thead>
      <tbody>
        <Data>
          <CatData>
            <ImStop2 color="#FED057" size="24px" title="colored box" />
            Main expenses
          </CatData>
          <SumData>8 700.00</SumData>
        </Data>
        <Data>
          <CatData>
            <ImStop2 color="#FFD8D0" size="24px" title="colored box" />
            Products
          </CatData>
          <SumData>3 800.74</SumData>
        </Data>
        <Data>
          <CatData>
            <ImStop2 color="#FD9498" size="24px" title="colored box" />
            Car
          </CatData>
          <SumData>1 500.00</SumData>
        </Data>
        <Data>
          <CatData>
            <ImStop2 color="#C5BAFF" size="24px" title="colored box" />
            Self care
          </CatData>
          <SumData>800.00</SumData>
        </Data>
        <Data>
          <CatData>
            <ImStop2 color="#6E78E8" size="24px" title="colored box" />
            Child care
          </CatData>
          <SumData>2208.50</SumData>
        </Data>
        <Data>
          <CatData>
            <ImStop2 color="#4A56E2" size="24px" title="colored box" />
            Household products
          </CatData>
          <SumData>300.00</SumData>
        </Data>
        <Data>
          <CatData>
            <ImStop2 color="#81E1FF" size="24px" title="colored box" />
            Education
          </CatData>
          <SumData>3 400.00</SumData>
        </Data>
        <Data>
          <CatData>
            <ImStop2 color="#24CCA7" size="24px" title="colored box" />
            Leisure
          </CatData>
          <SumData>1 230.00</SumData>
        </Data>
        <Data>
          <CatData>
            <ImStop2 color="#00AD84" size="24px" title="colored box" />
            Other expenses
          </CatData>
          <SumData>610.00</SumData>
        </Data>
      </tbody>
      <tfoot>
        <tr>
          <CatTotal>Expenses:</CatTotal>
          <ExpTotal>22 549.24</ExpTotal>
        </tr>
        <tr>
          <CatTotal>Income:</CatTotal>
          <IncTotal>27 350.00</IncTotal>
        </tr>
      </tfoot>
    </Table>
  );
};

export default ExpensesTable;
