import styled from 'styled-components';

export const HeaderBarIsLogedIn = styled.div`
  @media screen and (min-width: 1280px) {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, white 59%, ${p => p.theme.colors.background.greyBackground} 59% 100%);
    margin-left: auto;
    margin-right: auto;
  }
`;
