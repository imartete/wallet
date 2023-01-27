// import { useMedia } from 'components/Media/useMedia';
import { Box } from '@chakra-ui/react';
import Container from 'components/Container/Container';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  // const { isDesktop, isTablet, isMobile } = useMedia();
  return (
    <>
      <header>
        <Container>
          <Box display="flex" justifyContent="space-between">
            <p>Logo</p>
            <p>Exit</p>
          </Box>
        </Container>
      </header>
      <main>
        <Container>
          <nav>
            <ul>
              <li>
                <NavLink to="/" end>
                  Home Page
                </NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/currency">Currency</NavLink>
              </li>
            </ul>
          </nav>
          <UserMenu />
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
