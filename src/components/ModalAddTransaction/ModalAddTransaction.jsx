import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import { modalIsOpen } from '../../redux/modal/modalSlice';

import styled from '@emotion/styled';
import { AddTransactionForm } from 'components/AddTransactionForm/AddTransactionForm';

const Modal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onClickEscape = e => {
      if (e.code === 'Escape') {
        dispatch(modalIsOpen(false));
      }
    };
    document.addEventListener('keydown', onClickEscape);
    return () => {
      document.removeEventListener('keydown', onClickEscape);
    };
  }, [dispatch]);

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      dispatch(modalIsOpen(false));
    }
  };

  return ReactDOM.createPortal(
    <Overlay onClick={handleBackdrop}>
      <ModalWindow>
        <AddTransactionForm />
      </ModalWindow>
    </Overlay>,

    document.body
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalWindow = styled.div`
  background: linear-gradient(-225deg, #5d9fff 0%, #b8dcff 48%, #6bbbff 100%);
  border-radius: 5px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
