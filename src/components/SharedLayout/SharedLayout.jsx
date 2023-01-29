import { useMedia } from 'components/Media/useMedia';
import Container from 'components/Container/Container';
import CustomIcon from 'components/CustomIcon/CustomIcon';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

const SharedLayout = () => {
  const { isNotMobile } = useMedia();
  return (
    <>
      <header>
        <Container>
          {isNotMobile ? (
            <Box
              py="20px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap="20px">
                <CustomIcon name="icon-logo" color="currentColor" size="40px" />
                <Text fontSize="30px" fontWeight="700">
                  Wallet
                </Text>
              </Box>
              <UserMenu />
            </Box>
          ) : (
            <Box
              mb="15px"
              py="15px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap="15.5px">
                <CustomIcon name="icon-logo" color="currentColor" size="30px" />
                <Text fontSize="24px" fontWeight="700">
                  Wallet
                </Text>
              </Box>
              <UserMenu />
            </Box>
          )}
          <Navigation />
        </Container>
      </header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
