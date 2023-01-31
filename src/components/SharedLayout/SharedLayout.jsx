import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

const SharedLayout = () => {
  const { isMobile, isTablet, isDesktop, isBelowDesktop } = useMedia();

  return (
    <>
      <Header />
      <Box as="main" h="100vh" bgColor="#E5E5E5">
        <Box h="100vh" bgColor="rgba(255, 255, 255, 0.4)">
          <Container>
            {isMobile && <Navigation />}
            {isTablet && (
              <>
                <Box
                  pt="32px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-end"
                >
                  <Box>
                    <Navigation />
                    <Balance />
                  </Box>
                  <Currency />
                </Box>
              </>
            )}
            {isBelowDesktop && (
              <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
              </Suspense>
            )}
            {isDesktop && (
              <Box display="flex">
                <Box
                  pt="40px"
                  pr="69px"
                  pb="63px"
                  borderRight="1px solid #E7E5F2"
                  boxShadow="-1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6)"
                >
                  <Navigation />
                  <Balance />
                  <Currency />
                </Box>
                <Box pt="32px" pl="69px" width="100%">
                  <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                  </Suspense>
                </Box>
              </Box>
            )}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default SharedLayout;
