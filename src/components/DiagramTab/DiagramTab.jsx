import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import transactionSelectors from 'redux/transaction/transactionSelectors';
import { getSumTransactions } from 'redux/transaction/transactionOperations';
import { Select, Stack } from '@chakra-ui/react';
import * as yup from 'yup';
import { useFormik } from 'formik/dist';
import time from 'service/date';

const { getStatistics } = transactionSelectors;
const { years, months, date } = time;

let validationSchema = yup.object().shape({
  month: yup.number(),
  year: yup.number(),
});

export function DiagramTab() {
  const dispatch = useDispatch();
  const summary = useSelector(getStatistics);
  console.log(summary);

  const formik = useFormik({
    initialValues: {
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    },
    validationSchema,
  });

  useEffect(() => {
    dispatch(
      getSumTransactions({
        month: formik.values.month,
        year: formik.values.year,
      })
    );
  }, [dispatch, formik.values.month, formik.values.year]);

  return (
    <form>
      <Stack direction={['row']} spacing="5px">
        <Select
          name="month"
          variant="outline"
          onChange={formik.handleChange}
          value={formik.values.month}
        >
          {months.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </Select>
        <Select
          name="year"
          variant="outline"
          value={formik.values.year}
          onChange={formik.handleChange}
        >
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </Stack>
    </form>
  );
}
