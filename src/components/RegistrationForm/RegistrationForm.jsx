import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useState } from 'react';

let schema = yup.object().shape({
  email: yup
    .string()
    .email('Please follow the email pattern')
    .required('E-mail is required'),
  password: yup
    .string()
    .min(6, 'Password is too short - min 6 chars')
    .max(12, 'Password is too long - max 12 chars')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password, otherwise the world will end')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  firstName: yup
    .string()
    .min(2, 'Name should be at least 2 char long')
    .max(12, 'Sorry, name is too long - max 12 chars')
    .required('Name is required'),
});

export function RegistrationForm() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {props => (
        <Form>
          <Stack spacing={10}>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      /*                       children={<MdEmail />}
                       */
                    />
                    <Input {...field} variant="flushed" placeholder="E-mail" />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      /*                       children={<FaUnlockAlt />}
                       */
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                    <Input
                      {...field}
                      variant="flushed"
                      placeholder="Password"
                      type={show ? 'text' : 'password'}
                    />
                  </InputGroup>
                  <PasswordStrengthBar
                    barColors={[
                      '#ddd',
                      '#24CCA7',
                      '#24CCA7',
                      '#24CCA7',
                      '#24CCA7',
                      '#24CCA7',
                    ]}
                    minLength={6}
                    onChangeScore={(score, feedback) => {
                      console.log(score, feedback);
                    }}
                    password={form.values.password}
                  />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="confirmPassword">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.confirmPassword && form.touched.confirmPassword
                  }
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      /*                       children={<FaUnlockAlt />}
                       */
                    />
                    <Input
                      {...field}
                      variant="flushed"
                      placeholder="Confirm Password"
                      type="password"
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {form.errors.confirmPassword}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="firstName">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.firstName && form.touched.firstName}
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      /*                       children={<MdEmail />}
                       */
                    />
                    <Input
                      {...field}
                      variant="flushed"
                      placeholder="First name"
                    />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Stack>
          <Button
            /*             _disabled={!props.dirty}
             */
            mt={4}
            disabled
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
}
