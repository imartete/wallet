import { Stack, Switch, Text } from '@chakra-ui/react';

const { useField } = require('formik');

export function MyCheckbox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <Stack direction={['row']} spacing="5px" align="center" justify="center">
        <Text color={field.value ? '#D9D9D9' : '#24CCA7'}>Income</Text>
        <Switch
          size="lg"
          {...field}
          {...props}
          defaultChecked={field.value}
          colorScheme="pink"
        />
        <Text color={!field.value ? '#D9D9D9' : '#FF6596'}>Expense</Text>
      </Stack>
      {children}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
