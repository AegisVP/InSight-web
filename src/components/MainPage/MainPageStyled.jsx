import styled from 'styled-components';
import React from 'react';
import layer from '../../images/bcg-pages/Vector 3orig.png';
import leaves from '../../images/bcg-pages/leaf.png';
import banana from '../../images/bcg-pages/banana.png';
import strawberry from '../../images/bcg-pages/strawbeery.png';

export const Strawberry = () => {
  return <StrawberryStyled src={strawberry} alt="strawberry" />;
};

export const Banana = () => {
  return <BananaStyled src={banana} alt="banana" />;
};

export const Layer = () => {
  return <LayerStyled src={layer} alt="layer" />;
};

export const Leaves = () => {
  return <LeavesStyled src={leaves} alt="leaves" />;
};

export const MainPageHeaderStyled = styled.div`
  width: 100%;
  border-bottom: ${p => p.theme.border.header};
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    border: none;
    padding-bottom: 0;
    justify-content: flex-start;
  }
`;

export const MainPageFormContainer = styled.div`
  position: absolute;
  top: calc(100% / 5.7);
  margin-left: calc(100% / 24);
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

const StrawberryStyled = styled.img`
  position: absolute;
  z-index: -1;
  filter: drop-shadow(10px 20px 10px rgba(0, 0, 0, 0.3));
  transform: matrix(-1, 0, 0, 1, 0, 0);
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1280px) {
    width: calc(100% / 5);
    left: calc(100% / 1.4);
    top: calc(100% / 3.2);
  }
  @media (min-width: 1280px) {
    height: calc(100% / 4);
    left: calc(100% / 1.36);
    top: calc(100% / 1.68);
  }
`;

const BananaStyled = styled.img`
  position: absolute;
  z-index: -2;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1280px) {
    width: calc(100% / 1.09);
    left: calc(100% / 3.11);
    top: calc(100% / 2.8);
  }
  @media (min-width: 1280px) {
    height: calc(100% / 1.54);
    left: calc(100% / 1.64);
    top: calc(- (100% / 1.66));
  }
`;

const LayerStyled = styled.img`
  position: absolute;
  z-index: -4;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1280px) {
    width: calc(100% / 1.39);
    height: calc(100% / 1.5);
    left: calc(100% / 3.11);
    top: calc(100% / 2.9);
    /* top: calc(100% / 1.64); */
  }
  @media (min-width: 1280px) {
    width: calc(100% / 2.12);
    height: calc(100% / 1.04);
    left: calc(100% / 1.89);
    top: calc(100% / 25);
  }
`;

const LeavesStyled = styled.img`
  position: absolute;
  z-index: -3;
  animation: anim 10s infinite linear;
  animation-delay: 2.5s;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1280px) {
    width: calc(100% / 1.45);
    height: calc(100% / 1.7);
    top: calc(100% / 2.08);
    left: calc(100% / 25.6);
    transform: rotate(90deg);
  }
  @media (min-width: 1280px) {
    width: calc(100% / 1.71);
    height: calc(100% / 1.005);
    left: calc(100% / 3.96);
    top: calc(- (100% / 32.7));
  }
`;
