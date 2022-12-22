import styled from 'styled-components';

export const Backdrop = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100wh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(33, 33, 33, 0.12);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 672px;
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 767px) {
    width: 672px;
    height: 572px;
    flex-direction: column;
    align-items: center;
  } ;
`;

export const Title = styled.h2`
  display: block;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 700;
  color: #212121;
  font-family: 'Verdana';
  margin-top: 20px;
  padding-top: 20px;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    font-weight: 700;
    margin-right: 82px;
    margin-left: 82px;
    padding-top: 64px;
  }
`;
