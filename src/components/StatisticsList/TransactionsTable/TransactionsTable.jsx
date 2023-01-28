import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export const TransactionsTable = function ({ dataArr }) {
  dataArr.map(item => (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Type</Th>
            <Th>Category</Th>
            <Th>Comment</Th>
            <Th>Sum</Th>
            <Th>Balance</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{item.transactionDate}</Td>
            <Td>{item.type}</Td>
            <Td>{item.categoryId}</Td>
            <Td>{item.comment}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.balanceAfter}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  ));
};
