import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { Box, Button, Text } from '@chakra-ui/react';
import { isModalLogout } from '../../redux/modal/modalSlice';
import authOperations from 'redux/auth/authOperations';
import { ModalWindowLogOut, OverlayLogOut } from './ModalLogout.styled';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const { logOut } = authOperations;

  useEffect(() => {
    const onClickEscape = e => {
      if (e.code === 'Escape') {
        dispatch(isModalLogout(false));
      }
    };
    document.addEventListener('keydown', onClickEscape);
    return () => {
      document.removeEventListener('keydown', onClickEscape);
    };
  }, [dispatch]);

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      dispatch(isModalLogout(false));
    }
  };

  const modalCloseLogOut = () => {
    dispatch(logOut());
    dispatch(isModalLogout(false));
  };

  return ReactDOM.createPortal(
    <OverlayLogOut onClick={handleBackdrop}>
      <ModalWindowLogOut>
        <Box
          padding="50px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text>Do you want to keep your wallet?</Text>
          <Box>
            <Button borderRightRadius="0" onClick={() => modalCloseLogOut()}>
              Yes
            </Button>
            <Button
              borderRightRadius="0"
              onClick={() => dispatch(isModalLogout(false))}
            >
              No
            </Button>
          </Box>
        </Box>
      </ModalWindowLogOut>
    </OverlayLogOut>,

    document.body
  );
};

export default ModalLogout;
