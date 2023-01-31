import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'components/Media/useMedia';
import { Box, Text, Button, IconButton } from '@chakra-ui/react';
import { SlLogout } from 'react-icons/sl';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';

const UserMenu = () => {
  const { isNotMobile } = useMedia();
  const dispatch = useDispatch();
  const { logOut } = authOperations;
  const user = useSelector(authSelectors.getUser);
  const userName = user?.username;

  return (
    <>
      {isNotMobile ? (
        <Box display="flex" alignItems="center">
          <Box pr="12px" borderRight="1px solid #BDBDBD">
            <Text color="#BDBDBD" fontSize="18px" lineHeight="27px" as="span">
              {userName}
            </Text>
          </Box>
          <Button
            ml="12px"
            colorScheme="white"
            aria-label="Logout button"
            size="18px"
            onClick={() => dispatch(logOut())}
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
              {userName}
            </Text>
          </Box>
          <IconButton
            colorScheme="white"
            aria-label="Logout button"
            size="18px"
            onClick={() => dispatch(logOut())}
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
  );
};

export default UserMenu;
