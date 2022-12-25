import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../Common/Theme';

export const HeaderContainer = styled.nav`
  border-bottom: ${theme.border.header};
  padding-bottom: ${theme.spacing[3]}px;
  padding-top: ${theme.spacing[4]}px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 320px) {
    justify-content: flex-end;
  }
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
  @media screen and (min-width: 1280px) {
    border-bottom: none;
    align-items: flex-end;
  }
`;
export const LinkSignIn = styled(NavLink)`
  margin: ${theme.mp(0, 0, 0, 3)};
  color: ${theme.colors.text.defaultText};
  text-decoration: none;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
  @media screen and (min-width: 1280px) {
    margin-left: ${theme.spacing[3]}px;
    padding-left: ${theme.spacing[3]}px;
    border-left: ${theme.border.header};
  }
`;

export const LinkRegistration = styled(NavLink)`
  margin: ${theme.mp(0, 3, 0, 3)};
  color: ${theme.colors.text.mediumText};
  text-decoration: none;
  @media screen and (min-width: 320px) {
  }
`;
