// import { useMedia } from 'components/Media/useMedia';
import Container from 'components/Container/Container';
import LogoIcon from 'components/LogoIcon/LogoIcon';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { MdHome, MdTimeline } from 'react-icons/md';
import { TbCurrencyDollar } from 'react-icons/tb';

const SharedLayout = () => {
  // const { isDesktop, isTablet, isMobile } = useMedia();
  return (
    <>
      <header>
        <Container>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap="15.5px">
              <LogoIcon width="30px" height="30px" />
              <Text>Wallet</Text>
            </Box>
            <UserMenu />
          </Box>

          <nav>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '38px',
              }}
            >
              <li>
                <NavLink to="/" end>
                  <IconButton
                    bg="#4A56E2"
                    w="38px"
                    h="38px"
                    aria-label="Homepage Icon Button"
                    icon={<MdHome color="white" size="24px" />}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/statistics">
                  <IconButton
                    bg="#4A56E2"
                    w="38px"
                    h="38px"
                    aria-label="Statistics Icon Button"
                    icon={<MdTimeline color="white" size="24px" />}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/currency">
                  <IconButton
                    bg="#4A56E2"
                    w="38px"
                    h="38px"
                    aria-label="Currency Icon Button"
                    icon={<TbCurrencyDollar color="white" size="24px" />}
                  />
                </NavLink>
              </li>
            </ul>
          </nav>
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
