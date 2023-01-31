export const ModalAdd = state => state.modal.modalAddTransaction;

const ModalLogout = state => state.modal.modalLogout;

const modalSelectors = {
  ModalAdd,
  ModalLogout,
};

export default modalSelectors;
