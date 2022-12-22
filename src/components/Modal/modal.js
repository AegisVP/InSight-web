import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Window, Title } from './modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {
  // Add navigation to registration

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

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Window onClose={onClose}>
        {/* <CloseButton type ="button" onClick={onClose}></CloseButton> */}
        {/* <Title>Your recommended daily calorie intake is</Title> */}
        {/* <Button type="button" onClick={onClose}>Start loosing weight</Button> */}
        {children}
      </Window>
    </Backdrop>,
    modalRoot
  );
}
