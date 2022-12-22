import styled from 'styled-components';

import SideBarImg_1280 from '../../images/SideBarImg_1280.png';
import SideBarImg_768 from '../../images/SideBarImg_768.png';

export const Section = styled.section`
  max-width: 480px;
  background-color: ${p => p.theme.colors.background.greyBackground};

  @media screen and (min-width: 768px) {
    max-width: 768px;
    background-image: url(${SideBarImg_768});
    background-repeat: no-repeat;
    background-position: right;
  }

  @media screen and (min-width: 1280px) {
    max-width: 517px;
    background-image: url(${SideBarImg_1280});
  }
`;

export const Container = styled.div`
  padding: ${p => p.theme.mp(4, 3)};
  color: ${p => p.theme.colors.text.defaultText};
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: ${p => p.theme.mp(5, 4)};
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  padding-bottom: ${p => p.theme.mp(3)};
`;

export const List = styled.ul`
  @media screen and (max-width: 767px) {
    &: not(: last-child) {
      padding-bottom: ${p => p.theme.mp(4)};
    }
  }

  @media screen and (min-width: 768px) {
    width: 288px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    &: not(: last-child) {
      margin-right: ${p => p.theme.mp(5)};
    }
  }

  @media screen and (min-width: 1280px) {
    &: not(: last-child) {
      padding-bottom: ${p => p.theme.mp(5)};
    }
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &: not(: last-child) {
    padding-bottom: ${p => p.theme.mp(3)};
  } ;
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text.mediumText};
`;
