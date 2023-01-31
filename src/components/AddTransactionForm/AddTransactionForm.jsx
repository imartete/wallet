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
  addTransaction,
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

  // добавил функцию
  const clickOnsubmit = (values, actions) => {
    const newTransaction = {
      ...values,
      categoryId: values.type ? values.categoryId : '',
      type: values.type ? 'EXPENSE' : 'INCOME',
    };
    dispatch(addTransaction(newTransaction));
    actions.setSubmitting(false);
  };
  // добавил функцию
  // диспатч работает при условии что все поля заполнены  (я тестировал когда
  // вводил минусовое значение операции и заполнял все поля)
  //

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
        clickOnsubmit(values, actions);
        console.log({
          ...values,
          categoryId: values.type ? values.categoryId : '',
          type: values.type ? 'EXPENSE' : 'INCOME',
        });
        // actions.setSubmitting(false);
      }}
    >
      {props => (
        <Form height="100%">
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
                        <option
                          key={category.id}
                          value={category.id}
                          style={{
                            backdropFilter: 'blur(10px)',
                            color: 'black',
                          }}
                        >
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
                      color="black"
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
              py="13px"
              color="#FFFFFF"
              bgColor="#24CCA7"
              borderRadius="20px"
              colorScheme="teal"
              type="submit"
              /* isDisabled={!props.dirty} */
              mt={4}
              isLoading={props.isSubmitting}
            >
              ADD
            </Button>
            <Button
              py="13px"
              w="100%"
              borderRadius="20px"
              colorScheme="blue"
              variant="outline"
              onClick={onClick}
            >
              CANCEL
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
