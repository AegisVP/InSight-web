import {
  Exit,
  Name,
  Back,
  NavHeaderContainer,
  HamburgerMenu,
  LogoContainer,
  LinkDiary,
  LinkCalculator,
} from './NavHeader.styled';
import { TiArrowBack } from 'react-icons/ti';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router';
import { LogoMain } from 'components/Logo/Logo';
import { useMediaQuery } from 'react-responsive';
// import { useAuth } from 'hooks/useAuth';

export const NavHeader = () => {
  const navigate = useNavigate();
  const url = window.location.href.split('/').pop();

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <>
      {isMobile && (
        <>
          <LogoContainer>
            <LogoMain />
            <HamburgerMenu type="button">
              <GiHamburgerMenu size={20} />
            </HamburgerMenu>
          </LogoContainer>
          <NavHeaderContainer>
            {(url === 'diary' || url === 'calculator') && (
              <>
                <Back type="button" onClick={() => navigate(-1)}>
                  <TiArrowBack size={20} />
                </Back>
              </>
            )}
            <Name type="button">Name</Name>
            <Exit type="button">Exit</Exit>
          </NavHeaderContainer>
        </>
      )}
      {isTablet && (
        <>
          <NavHeaderContainer>
            <LogoMain />
            <Name type="button">Name</Name>
            <Exit type="button">Exit</Exit>
            <HamburgerMenu type="button">
              <GiHamburgerMenu size={20} />
            </HamburgerMenu>
          </NavHeaderContainer>
        </>
      )}
      {isDesktop && (
        <>
          <NavHeaderContainer>
            <LogoMain />
            <LinkDiary to={'diary'}>DIARY</LinkDiary>
            <LinkCalculator to={'calculator'}>CALCULATOR</LinkCalculator>
            <Name type="button">Name</Name>
            <Exit type="button">Exit</Exit>
          </NavHeaderContainer>
        </>
      )}
    </>
  );
};
