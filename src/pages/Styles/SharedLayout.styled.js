import styled from 'styled-components';
import { theme } from '../../components/Common/Theme';

export const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0;
  padding: ${theme.mp(3, 4)};

  height: ${theme.spacing[5]}px;

  font-size: ${theme.fontSizes.l};
  color: ${theme.colors.defaultText};

  background-color: ${theme.colors.pageBackgroundAccent};
`;

export const HeaderBarIsLogedIn = styled.div`
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    background: linear-gradient(to right, white 760px, ${p => p.theme.colors.background.greyBackground} 760px 1280px);
    margin-left: auto;
    margin-right: auto;
  }
`;
