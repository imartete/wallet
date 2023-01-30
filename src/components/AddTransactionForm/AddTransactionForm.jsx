import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import {
  /*   addTransaction, */
  fetchCategories,
} from 'redux/transaction/transactionOperations';
import { useEffect } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import transactionSelectors from 'redux/transaction/transactionSelectors';
import { MyCheckbox } from 'components/Switch/Switch';
/* import time from 'service/date'; */
const { getCategories } = transactionSelectors;

/* const { date } = time;

function makeDate(day, month, year) {
  return `${year}/${month}/${day}`;
} */

let schema = yup.object().shape({
  transactionDate: yup.date().required('This field is required'),
  type: yup.bool().required(),
  categoryId: yup.string(),
  comment: yup.string().max(50, 'Sorry, comment is too long'),
  amount: yup.number().required('This field is required'),
});

export const AddTransactionForm = ({ onClick }) => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        transactionDate: '',
        type: true,
        categoryId: '',
        comment: '',
        amount: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        /*         dispatch(
          addTransaction({
            ...values,
            transactionDate: values.transactionDate.toJSON(),
            categoryId: values.type ? values.categoryId : '',
            type: values.type ? 'EXPENSE' : 'INCOME',
          })
        ); */
        console.log({
          ...values,
          categoryId: values.type ? values.categoryId : '',
          type: values.type ? 'EXPENSE' : 'INCOME',
        });
        actions.setSubmitting(false);
      }}
    >
      {props => (
        <Form>
          <Stack spacing={5}>
            <MyCheckbox name="type" checked={props.values.type} />
            {props.values.type && (
              <Field name="categoryId">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.categoryId && form.touched.categoryId
                    }
                  >
                    <Select
                      {...field}
                      placeholder="Select a category"
                      variant="flushed"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {form.errors.categoryId}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            )}
            <Stack direction={['column', 'row']} spacing="24px">
              <Field name="amount">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.amount && form.touched.amount}
                  >
                    <Input
                      {...field}
                      type="number"
                      textAlign="center"
                      fontWeight="600"
                      placeholder="0.00"
                      variant="flushed"
                    />
                    <FormErrorMessage>{form.errors.amount}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="transactionDate">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.transactionDate &&
                      form.touched.transactionDate
                    }
                  >
                    <Input
                      {...field}
                      type="date"
                      color="#BDBDBD"
                      textAlign="center"
                      variant="flushed"
                      placeholder="Select Date and Time"
                    />
                    <FormErrorMessage>
                      {form.errors.transactionDate}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Stack>
            <Field name="comment">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.comment && form.touched.comment}
                >
                  <Input {...field} variant="flushed" placeholder="Comment" />
                  <FormErrorMessage>{form.errors.comment}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              /* isDisabled={!props.dirty} */
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              ADD
            </Button>
            <Button colorScheme="blue" variant="outline" onClick={onClick}>
              CANCEL
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
