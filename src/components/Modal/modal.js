import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal, Title } from './modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose }) {
  useEffect(() => {
    const hadleKeyDown = event => {
      if (event.code === 'Escape') {
        onclose();
      }
    };
    window.addEventListener('keydown', hadleKeyDown);

    return () => {
      window.removeEventListener('keydown', hadleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        {/* <CloseButton onClick={onClose}></CloseButton> */}
        <Title>Your recommended daily calorie intake is</Title>
        {/* <Button></Button> */}
      </Modal>
    </Backdrop>,
    modalRoot
  );
}
