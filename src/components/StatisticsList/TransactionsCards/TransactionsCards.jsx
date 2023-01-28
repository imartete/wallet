import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

export const TransactionsCards = function ({ dataArr }) {
  return dataArr.map(item => (
    <UnorderedList>
      <ListItem key={item.id}>
        <Text as="span">Date</Text>
        <Text as="span">{item.transactionDate}</Text>
      </ListItem>
      <ListItem key={item.id}>
        <Text as="span">Type</Text>
        <Text as="span">{item.type}</Text>
      </ListItem>
      <ListItem key={item.id}>
        <Text as="span">Category</Text>
        <Text as="span">{item.categoryId}</Text>
      </ListItem>
      <ListItem key={item.id}>
        <Text as="span">Comment</Text>
        <Text as="span">{item.comment}</Text>
      </ListItem>
      <ListItem key={item.id}>
        <Text as="span">Sum</Text>
        <Text as="span">{item.amount}</Text>
      </ListItem>
      <ListItem key={item.id}>
        <Text as="span">Balance</Text>
        <Text as="span">{item.balanceAfter}</Text>
      </ListItem>
    </UnorderedList>
  ));
};
