import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  padding-top: ${p => p.theme.spacing[3]}px;
  padding-left: ${p => p.theme.spacing[3]}px;
  padding-right: ${p => p.theme.spacing[3]}px;
  width: 100%;
  height: 80px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.spacing[4]}px;
    /* padding-bottom: ${p => p.theme.spacing[3]}px; */
    border-bottom: ${p => p.theme.border.header};
  }

  @media screen and (min-width: 1280px) {
    border: none;
    padding-bottom: 0;
  }
`;
