import { Box, Text, IconButton } from '@chakra-ui/react';
import { SlLogout } from 'react-icons/sl';

const UserMenu = () => {
  return (
    <Box display="flex" alignItems="center">
      <Box>
        <Text color="#BDBDBD">Name</Text>
      </Box>
      <IconButton
        colorScheme="white"
        aria-label="Logout button"
        icon={
          <SlLogout
            color="#BDBDBD"
            size="18px"
            style={{ transform: 'rotate(0.5turn)' }}
          />
        }
      />
    </Box>
  );
};

export default UserMenu;
