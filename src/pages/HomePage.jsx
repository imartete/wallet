import Modal from 'components/ModalAddTransaction/ModalAddTransaction';
import OpenModalTransitionBtn from 'components/OpenModalTransitionBtn/OpenModalTransitionBtn';
import { useModals } from 'hooks/useModal';

const HomePage = () => {
  const isOpen = useModals();
  return (
    <>
      {isOpen && <Modal />}
      <OpenModalTransitionBtn />
    </>
  );
};
export default HomePage;
