import styled from 'styled-components';

export const HeaderContainer = styled.div`
  @media screen and (min-width: 321px) {
    width: 100%;
    /* position: absolute; */
    display: flex;
    align-items: center;
    justify-content: end;
    border-bottom: ${p => p.theme.border.header};
  }

  @media screen and (min-width: 769px) {
    padding-top: ${p => p.theme.spacing[5]}px;
    border: none;
    justify-content: space-between;
  }
`;
