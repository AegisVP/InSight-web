import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  padding-right: ${p => p.theme.mp(3)};
  padding-bottom: ${p => p.theme.mp(3)};
  padding-top: ${p => p.theme.mp(4)};
  display: flex;
  align-items: center;
  @media screen and (min-width: 320px) {
    justify-content: flex-end;
  }
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
  @media screen and (min-width: 1280px) {
    padding-right: 0;
    padding-top: ${p => p.theme.mp(5)};
    align-items: flex-end;
  }
`;
export const AuthLink = styled(NavLink)`
  padding-right: ${p => p.theme.mp(3)};
  margin: ${p => p.theme.mp(0, 0, 0, 3)};
  color: ${p => p.theme.colors.text.mediumText};
  text-decoration: none;
  @media screen and (min-width: 768px) {
    margin-left: auto;
    padding-right: ${p => p.theme.mp(3)};
  }

  @media screen and (min-width: 1280px) {
    margin-left: ${p => p.theme.mp(3)};
    padding-left: ${p => p.theme.mp(3)};
    padding-right: 0;
:first-child {
    border-left: ${p => p.theme.border.header};
  }
}
  :hover {
    color: ${p => p.theme.colors.text.accentText};
  }
  &.active {
    color: ${p => p.theme.colors.text.defaultText};
  }
`;
