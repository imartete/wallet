import { AddIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { modalIsOpen } from 'redux/modal/modalSlice';

const OpenModalTransitionBtn = () => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Button borderLeftRadius="0" onClick={() => dispatch(modalIsOpen(true))}>
        <AddIcon />
      </Button>
    </Box>
  );
};

export default OpenModalTransitionBtn;
