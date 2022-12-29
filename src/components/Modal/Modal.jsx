import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { Backdrop, ModalViev, Close } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const isOpenModal = state=> state.modal.isOpen

export const Modal = ({ onClose, children }) => {
  const modalOpen = useSelector(isOpenModal)
  console.log('modalOpen', modalOpen)
  

  useEffect(() => {
    const hadleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return createPortal(
    <Backdrop onClick={handleBackDropClick}>
      <ModalViev>
        <Close type="button" size="20px" onClick={onClose}></Close>
        {children}
      </ModalViev>
    </Backdrop>,
    modalRoot
  );
};
