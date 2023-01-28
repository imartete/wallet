import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Switch,
  useControllableState,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

let schema = yup.object().shape({
  type: yup.bool().oneOf([true]),
  amount: yup.number().positive().required('This field is required'),
  date: yup.date(),
  comment: yup.string().max(50, 'Sorry, comment is too long'),
});

export function AddTransactionForm() {
  const [checked, setChecked] = useControllableState(true);

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
                /*                 onClick={() => {
                  setChecked(ch => !ch);
                  console.log(checked);
                }}
                isChecked={checked} */
              />
              <FormLabel htmlFor="type" mb="0">
                Expense
              </FormLabel>
            </FormControl>
            <Field name="category">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.date && form.touched.date}>
                  <Select placeholder="Select option">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="amount">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.amount && form.touched.amount}
                >
                  <Input
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
                <FormControl isInvalid={form.errors.date && form.touched.date}>
                  <Input
                    {...field}
                    variant="flushed"
                    placeholder="Select Date and Time"
                    type="date"
                  />
                  <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
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
              LOG IN
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
