import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'components/Common/Theme';

export const NavHeaderContainer = styled.nav`
  text-align: end;
  display: flex;
  border-bottom: ${theme.border.header};
  @media screen and (max-width: 767px) {
    background: ${theme.colors.background.greyBackground};
  }
  @media screen and (min-width: 768px) {
    padding: ${theme.mp(3, 0, 3, 0)};
  }
  @media screen and (min-width: 1280px) {
    border-bottom: none;
    align-items: flex-end;
    padding: ${theme.mp(6, 0, 3, 0)};
  } ;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LinkDiary = styled(NavLink)`
  margin: ${theme.mp(0, 0, 0, 3)};
  color: ${theme.colors.text.defaultText};
  text-decoration: none;
  margin-left: auto;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    margin-left: ${theme.spacing[3]}px;
    padding-left: ${theme.spacing[3]}px;
    border-left: ${theme.border.header};
  }
`;
export const LinkCalculator = styled(NavLink)`
  margin: ${theme.mp(0, 3, 0, 3)};
  color: ${theme.colors.text.mediumText};
  text-decoration: none;
`;
export const HamburgerMenu = styled.button`
  display: block;
  border: none;
  background-color: inherit;
  margin: ${theme.mp(0, 3, 0, 'auto')};
  @media screen and (min-width: 768px) {
    margin: ${theme.mp(0, 3, 0, 0)};
  }
`;
export const Exit = styled.button`
  padding-left: ${theme.spacing[3]}px;
  margin-right: ${theme.spacing[3]}px;
  background: none;
  border: none;
  border-left: ${theme.border.header};
  color: ${theme.colors.text.mediumText};
`;
export const Name = styled.button`
  padding-right: ${theme.spacing[3]}px;
  margin-left: auto;
  border: none;
  background: none;
`;
export const Back = styled.button`
  display: block;
  border: none;
  background-color: inherit;
  margin-right: auto;
  margin-left: ${theme.spacing[3]}px;
`;
