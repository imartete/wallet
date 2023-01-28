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
import { useState } from 'react';
import { MdMail, MdLock } from 'react-icons/md';
import { IoMdEyeOff, IoMdEye } from 'react-icons/io';

let schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('E-mail is required'),
  password: yup
    .string()
    .min(6, 'Password is too short')
    .max(12, 'Password is too long')
    .required('Password is required'),
});

export function LoginForm() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
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
                      children={<MdMail />}
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
                      children={<MdLock />}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? (
                          <IoMdEyeOff size={'1.3em'} />
                        ) : (
                          <IoMdEye size={'1.3em'} />
                        )}
                      </Button>
                    </InputRightElement>
                    <Input
                      {...field}
                      variant="flushed"
                      placeholder="Password"
                      type={show ? 'text' : 'password'}
                    />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Stack>
          <Button
            /*  disabled={!props.dirty}  */
            mt={4}
            disabled
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            LOG IN
          </Button>
          {/*  <Button as={<Link />} to="/register" colorScheme="blue", variant='outline'>
            REGISTER
          </Button> */}
        </Form>
      )}
    </Formik>
  );
}
