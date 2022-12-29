import styled from 'styled-components';

export const Container = styled.div`
  /* margin-left: auto;
  margin-right: auto; */
  max-width: 480px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    overflow: hidden;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${p => p.theme.mp(4)};

  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.mp(5)};
  }

  @media screen and (min-width: 1280px) {
    padding-top: ${p => p.theme.mp(6)};
  }
`;
