import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { fetchCategories } from 'redux/transaction/transactionOperations';
import { useEffect } from 'react';
import { useState } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import transactionSelectors from 'redux/transaction/transactionSelectors';
const { getCategories } = transactionSelectors;

let schema = yup.object().shape({
  transactionDate: yup.string().required('This field is required'),
  type: yup.string().required(),
  categoryId: yup.string(),
  comment: yup.string().max(50, 'Sorry, comment is too long'),
  amount: yup.number().positive().required('This field is required'),
});

export function AddTransactionForm() {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        transactionDate: '',
        type: '',
        categoryId: '',
        comment: '',
        amount: 0,
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {props => (
        <Form>
          <Stack spacing={10}>
            <Field name="type">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.type && form.touched.type}>
                  <Stack direction={['row']} spacing="5px">
                    <Text>Income</Text>
                    <Switch
                      {...field}
                      name="type"
                      size="lg"
                      id="type"
                      isChecked={checked}
                      value={checked ? 'EXPENSE' : 'INCOME'}
                      onChange={() => {
                        setChecked(ch => !ch);
                      }}
                    />
                    <Text>Expense</Text>
                  </Stack>
                  <FormErrorMessage>{form.errors.type}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {checked && (
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
                      textAlign="center"
                      fontWeight="600"
                      {...field}
                      placeholder={'0.00'}
                      variant="flushed"
                      type="number"
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
                      textAlign="center"
                      {...field}
                      variant="flushed"
                      placeholder="Select Date and Time"
                      type="date"
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
            <Button colorScheme="blue" variant="outline">
              CANCEL
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
