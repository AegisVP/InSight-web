import { SideBar } from 'components/SideBar/SideBar';
import { Container, LeftSection } from './Styles/DiaryPage.styled';
import CalculatorCalorieForm from 'components/CalculatorCalorieForm';
import { useState, useEffect } from 'react';
import { Modal } from 'components/Modal/Modal';
import { CaloriesIntake } from 'components/CaloriesIntake/CaloriesIntake';
import { useSelector } from 'react-redux';
import { selectDiet, selectUserIsLoggedIn } from 'redux/selectors';
import { NavHeader } from 'components/Header/NavHeader/NavHeader';
import { AuthHeader } from 'components/Header/AuthLinks/AuthLinks';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

const Calculator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const diet = useSelector(selectDiet);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const globalModal = useSelector(state => state.modal.isOpen);

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth;
  };

  const width = useWindowWidth();

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      {globalModal ? (
        <BurgerMenu />
      ) : (
        <LeftSection>
          <CalculatorCalorieForm modal={modalHandler} />
        </LeftSection>
      )}
      {isOpen && diet && (
        <Modal onClose={modalHandler}>
          {width < 768 ? (
            <>
              {isLoggedIn ? <NavHeader showButton={isOpen} onButtonClick={modalHandler} /> : <AuthHeader />}
              <CaloriesIntake diet={diet} />
            </>
          ) : (
            <CaloriesIntake diet={diet} />
          )}
        </Modal>
      )}
      {isLoggedIn && <SideBar />}
    </Container>
  );
};

export default Calculator;
