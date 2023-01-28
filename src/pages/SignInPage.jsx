import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box, Text } from '@chakra-ui/react';
import LogoIcon from 'components/LogoIcon/LogoIcon';

const SignInPage = () => {
  return (
    <>
      <Box display="flex" alignItems="center" gap="15.5px">
        <LogoIcon width="30px" height="30px" />
        <Text>Wallet</Text>
      </Box>
      <LoginForm />
    </>
  );
};

export default SignInPage;
