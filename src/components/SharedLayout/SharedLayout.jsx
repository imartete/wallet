import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import Currency from '../Currency/Currency';
import Balance from '../Balance/Balance';


const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Balance />
          <Currency />
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
