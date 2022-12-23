import { SideBar } from 'components/SideBar/SideBar';
import { useAuth } from 'hooks/useAuth';
import { Container, LeftSection } from './Styles/DiaryPage.styled';

const Calculator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container style={{ outline: '1px solid tomato' }}>
      <LeftSection style={{ outline: '1px solid blue,width:100%' }}>Calculator</LeftSection>
      {isLoggedIn && <SideBar />}
    </Container>
  );
};

export default Calculator;
