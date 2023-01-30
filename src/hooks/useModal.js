import { useSelector } from 'react-redux';
import { selectModal } from '../redux/modal/modalSelector';

export const useModals = () => useSelector(selectModal);

// for example: const   isOpen = useModals();
// you will have   const isOpen = state.modal.value;
