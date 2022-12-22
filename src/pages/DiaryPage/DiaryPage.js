import { useEffect, useState } from 'react';
import { DairyForm } from 'components/Dairy/DairyForm';
import { SideBar } from 'components/SideBar/SideBar';
import { Calendar } from '../../components/Calendar/Calendar';
import { Container } from './DiaryPage.styled';

export const DiaryPage = () => {
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

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Calendar screenWidth={width} />
        <DairyForm screenWidth={width} />
      </div>
      <SideBar />
    </Container>
  );
};
