import { Stack, Switch, Text } from '@chakra-ui/react';

const { useField } = require('formik');

export function MyCheckbox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <Stack direction={['row']} spacing="5px">
        <Text>Income</Text>
        <Switch size="lg" {...field} {...props} defaultChecked={field.value} />
        <Text>Expense</Text>
      </Stack>
      {children}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
