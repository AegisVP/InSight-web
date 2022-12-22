import styled from 'styled-components';

import tabletbanana from '../../images/bcg-pages/tabletbanana.png';
import desktopbanana from '../../images/bcg-pages/desktopbanana.png';
import tabletstrawberry from '../../images/bcg-pages/tabletstrawberry.png';
import desktopstrawberry from '../../images/bcg-pages/desktopstrawberry.png';
import tabletleaf from '../../images/bcg-pages/tabletleaf.png';
import desktopleaf from '../../images/bcg-pages/desktopleaf.png';
import tabletgreyback from '../../images/bcg-pages/tabletgreyback.png';
import desktopgreyback from '../../images/bcg-pages/desktopgreyback.png';

export const Wrapper = styled.div`
  background: none;
  @media screen and (min-width: 768px) {
    height: 100vh;
    background: url(${tabletleaf}), url(${tabletbanana}), url(${tabletstrawberry}), url(${tabletgreyback}), white;
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: right 16px top -60px, right bottom, right top 361px, right bottom;
  }

  @media screen and (min-width: 1280px) {
    height: 100vh;
    background: url(${desktopleaf}), url(${desktopbanana}), url(${desktopstrawberry}), url(${desktopgreyback}), white;
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: right 25% bottom 140px, right top, right bottom, right bottom;
  }
`;

export const Container = styled.div`
  /* padding: 0 20px; */
  width: 100%;
  margin: auto;
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    /* padding: 0 32px; */
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    /* padding: 0 16px; */
  }
`;
