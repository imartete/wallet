import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Switch,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
/* import { useEffect } from 'react'; */
import { useState } from 'react';
/* import { getTransactionCategories } from 'service/transactionApi';
 */ import * as yup from 'yup';

let schema = yup.object().shape({
  type: yup.bool().oneOf([true]),
  amount: yup.number().positive().required('This field is required'),
  date: yup.date(),
  comment: yup.string().max(50, 'Sorry, comment is too long'),
});

export function AddTransactionForm() {
  const [checked, setChecked] = useState(true);

  /* useEffect(() => {
    let result = getTransactionCategories();
    console.log(result);
  }); */

  return (
    <Formik
      initialValues={{
        type: '',
        amount: '',
        date: '',
        comment: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {props => (
        <Form>
          <Stack spacing={10}>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="type" mb="0">
                Income
              </FormLabel>
              <Switch
                size="lg"
                id="type"
                defaultChecked={checked}
                onChange={() => setChecked(ch => !ch)}
              />
              <FormLabel htmlFor="type" mb="0">
                Expense
              </FormLabel>
            </FormControl>
            {checked && (
              <Field name="category">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.date && form.touched.date}
                  >
                    <Select
                      {...field}
                      placeholder="Select option"
                      variant="flushed"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <FormErrorMessage>{form.errors.date}</FormErrorMessage>
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
                      variant="flushed"
                      placeholder="0.00"
                      type="number"
                    />
                    <FormErrorMessage>{form.errors.amount}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="date">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.date && form.touched.date}
                  >
                    <Input
                      textAlign="center"
                      {...field}
                      variant="flushed"
                      placeholder="Select Date and Time"
                      type="date"
                    />
                    <FormErrorMessage>{form.errors.date}</FormErrorMessage>
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
              isDisabled={!props.dirty}
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
