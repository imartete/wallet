import { useMedia } from 'components/Media/useMedia';
import { Box, Text, Button, IconButton } from '@chakra-ui/react';
import { SlLogout } from 'react-icons/sl';

const UserMenu = () => {
  const { isNotMobile } = useMedia();
  return (
    <>
      {isNotMobile ? (
        <Box display="flex" alignItems="center">
          <Box pr="12px" borderRight="1px solid #BDBDBD">
            <Text color="#BDBDBD" fontSize="18px" lineHeight="27px" as="span">
              Name
            </Text>
          </Box>
          <Button
            ml="12px"
            colorScheme="white"
            aria-label="Logout button"
            size="18px"
            leftIcon={
              <SlLogout
                color="#BDBDBD"
                size="18px"
                style={{ transform: 'rotate(0.5turn)' }}
              />
            }
          >
            <Text
              color="#BDBDBD"
              fontSize="18px"
              fontWeight="400"
              lineHeight="27px"
              as="span"
            >
              Exit
            </Text>
          </Button>
        </Box>
      ) : (
        <Box display="flex" alignItems="center" gap="8px">
          <Box>
            <Text color="#BDBDBD" fontSize="18px" lineHeight="27px" as="span">
              Name
            </Text>
          </Box>
          <IconButton
            colorScheme="white"
            aria-label="Logout button"
            size="18px"
            icon={
              <SlLogout
                color="#BDBDBD"
                size="18px"
                style={{ transform: 'rotate(0.5turn)' }}
              />
            }
          />
        </Box>
      )}
    </>

    // <Box display="flex" alignItems="center" gap="8px">
    //   <Box>
    //     <Text color="#BDBDBD" fontSize="18px" lineHeight="27px">
    //       Name
    //     </Text>
    //   </Box>
    //   <IconButton
    //     colorScheme="white"
    //     aria-label="Logout button"
    //     size="18px"
    //     icon={
    //       <SlLogout
    //         color="#BDBDBD"
    //         size="18px"
    //         style={{ transform: 'rotate(0.5turn)' }}
    //       />
    //     }
    //   />
    // </Box>
  );
};

export default UserMenu;
