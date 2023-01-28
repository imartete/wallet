import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { ImStop2 } from 'react-icons/im';

const ExpensesTable = () => {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Category</Th>
            <Th isNumeric>Sum</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td display="flex" alignItems="center" gap="16px">
              <ImStop2 color="#FED057" size="24px" title="colored box" />
              Main expenses
            </Td>
            <Td isNumeric>8 700.00</Td>
          </Tr>
          <Tr>
            <Td display="flex" alignItems="center" gap="16px">
              <ImStop2 color="#FFD8D0" size="24px" title="colored box" />
              Products
            </Td>
            <Td isNumeric>3 800.74</Td>
          </Tr>
          <Tr>
            <Td display="flex" alignItems="center" gap="16px">
              <ImStop2 color="#FD9498" size="24px" title="colored box" />
              Car
            </Td>
            <Td isNumeric>1 500.00</Td>
          </Tr>
          <Tr>
            <Td display="flex" alignItems="center" gap="16px">
              <ImStop2 color="#C5BAFF" size="24px" title="colored box" />
              Self care
            </Td>
            <Td isNumeric>800.00</Td>
          </Tr>
          <Tr>
            <Td display="flex" alignItems="center" gap="16px">
              <ImStop2 color="#6E78E8" size="24px" title="colored box" />
              Child care
            </Td>
            <Td isNumeric>2208.50</Td>
          </Tr>
          <Tr>
            <Td display="flex" alignItems="center" gap="16px">
              <ImStop2 color="#4A56E2" size="24px" title="colored box" />
              Household products
            </Td>
            <Td isNumeric>300.00</Td>
          </Tr>
          <Tr>
            <Td display="flex" alignItems="center" gap="16px">
              <ImStop2 color="#81E1FF" size="24px" title="colored box" />
              Education
            </Td>
            <Td isNumeric>3 400.00</Td>
          </Tr>
          <Tr>
            <Td display="flex" alignItems="center" gap="16px">
              <ImStop2 color="#24CCA7" size="24px" title="colored box" />
              Leisure
            </Td>
            <Td isNumeric>1 230.00</Td>
          </Tr>
          <Tr>
            <Td display="flex" alignItems="center" gap="16px">
              <ImStop2 color="#00AD84" size="24px" title="colored box" />
              Other expenses
            </Td>
            <Td isNumeric>610.00</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Expenses:</Th>
            <Th isNumeric>22 549.24</Th>
          </Tr>
          <Tr>
            <Th>Income:</Th>
            <Th isNumeric>27 350.00</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ExpensesTable;
