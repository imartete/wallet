import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { isModalAddTransaction } from '../../redux/modal/modalSlice';
import { AddTransactionForm } from 'components/AddTransactionForm/AddTransactionForm';
import { ModalWindow, Overlay } from './ModalAddTransaction.styled';
import { CloseButton } from '@chakra-ui/react';

const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const onClickEscape = e => {
      if (e.code === 'Escape') {
        dispatch(isModalAddTransaction(false));
      }
    };
    document.addEventListener('keydown', onClickEscape);
    return () => {
      document.removeEventListener('keydown', onClickEscape);
    };
  }, [dispatch]);

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      dispatch(isModalAddTransaction(false));
    }
  };

  return ReactDOM.createPortal(
    <Overlay onClick={handleBackdrop}>
      <ModalWindow>
        <CloseButton
          p="11"
          pos="absolute"
          top="5"
          right="5"
          size="md"
          onClick={handleBackdrop}
        />
        <AddTransactionForm onClick={handleBackdrop} />
      </ModalWindow>
    </Overlay>,

    document.body
  );
};

export default ModalAddTransaction;
