import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box, Text } from '@chakra-ui/react';
import CustomIcon from 'components/CustomIcon/CustomIcon';

const SignInPage = () => {
  return (
    <>
      <Box display="flex" alignItems="center" gap="20px">
        <CustomIcon name="icon-logo" color="currentColor" size="40px" />
        <Text fontSize="30px" fontWeight="700">
          Wallet
        </Text>
      </Box>
      <LoginForm />
    </>
  );
};

export default SignInPage;
