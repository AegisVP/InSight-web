import styled from 'styled-components';
import { theme } from 'components/Common/Theme';

export const NavHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: ${theme.colors.background.greyBackground};
  @media screen and (min-width: 321px) {
    background-color: inherit;
    margin-left: auto;
  }
  @media screen and (min-width: 769px) {
  }
`;
export const Exit = styled.button`
  height: 32px;
  border: none;
  background-color: inherit;
  border-left: ${theme.border.header};
  margin: ${theme.mp(0, 3, 0, 3)};
  padding: ${theme.mp(0, 0, 0, 3)};
`;
export const Name = styled.button`
  height: 32px;
  border: none;
  background-color: inherit;
  margin-left: auto;
`;
