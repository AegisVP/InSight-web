import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Block, CalendarBox, DateText, Icon, Modal } from './Calendar.styled';

export const Calendar = ({ screenWidth }) => {
  const [choseDate, setChoseDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDownEsc);
      return () => {
        window.removeEventListener('keydown', handleKeyDownEsc);
      };
    }
  });

  const handleChoseDate = e => {
    setIsOpen(!isOpen);
    setChoseDate(e);
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
    }
  };
  const handleKeyDownEsc = e => {
    if (e.code === 'Escape') {
      setIsOpen(!isOpen);
    }
  };

  const BlockCalendar = () => {
    if (screenWidth > 767) {
      return (
        <CalendarBox>
          <DatePicker selected={choseDate} onChange={handleChoseDate} inline />
        </CalendarBox>
      );
    }
    return (
      <Modal onClick={handleBackdropClick}>
        <DatePicker selected={choseDate} onChange={handleChoseDate} inline />
      </Modal>
    );
  };

  return (
    <Block>
      {choseDate && <DateText> {choseDate.toLocaleDateString()}</DateText>}
      <Icon onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <BlockCalendar />}
    </Block>
  );
};
