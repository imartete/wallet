import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSumTransactions } from 'redux/transaction/transactionOperations';
import { Select, Stack } from '@chakra-ui/react';
import time from 'service/date';
import { useState } from 'react';

const { years, months, date } = time;

export const Filter = () => {
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getSumTransactions({ month: parseInt(month) + 1, year: parseInt(year) })
    );
  }, [dispatch, month, year]);

  const handleChange = event => {
    if (event.target.id === 'month') setMonth(event.target.value);
    if (event.target.id === 'year') setYear(event.target.value);
  };

  return (
    <Stack direction={['row']} spacing="5px">
      <Select id="month" onChange={handleChange} variant="outline">
        {months.map((selected, index) => (
          <option key={index} value={index}>
            {selected}
          </option>
        ))}
      </Select>
      <Select id="year" variant="outline" onChange={handleChange}>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </Stack>
  );
};
