import styled from 'styled-components';

//form

export const SForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 285px;
  @media screen and (min-width: 768px) {
    margin: 0;
    flex-direction: row;
    width: 610px;
    align-items: center;
    padding-bottom: ${p => p.theme.spacing[5]}px;
  }
`;

export const DContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: ${p => p.theme.spacing[5]}px;
  padding-left: ${p => p.theme.spacing[3]}px;
  padding-right: ${p => p.theme.spacing[3]}px;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    padding-bottom: ${p => p.theme.spacing[5]}px;
    padding-left: ${p => p.theme.spacing[4]}px;
    padding-right: ${p => p.theme.spacing[4]}px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: ${p => p.theme.spacing[5]}px;
    padding-left: ${p => p.theme.spacing[3]}px;
    padding-right: ${p => p.theme.spacing[3]}px;
  }
`;
export const ButtonDairy = styled.button`
  margin-top: ${p => p.theme.spacing[5]}px;
  margin-left: auto;
  margin-right: auto;
  width: 176px;
  height: 44px;
  background-color: ${p => p.theme.colors.text.accentText};
  border-radius: 22px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border: none;
  color: ${p => p.theme.colors.text.inverseText};
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
    height: 48px;
    width: 48px;
    border-radius: ${p => p.theme.radii.round};
  }
`;

export const DairyInput = styled.input`
  display: flex;
  outline: none;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
  padding-bottom: ${p => p.theme.spacing[1]}px;
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: ${p => p.theme.spacing[2]}px;
      align-content: center;
      margin-bottom: 0;
      padding-bottom: ${p => p.theme.spacing[3]}px;
      align-self: flex-end;
    }
  }
`;

export const ModalButton = styled(ButtonDairy)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: ${p => p.theme.radii.round};
`;

export const Plus = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Add = styled.span`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

//list

export const DairyProdLi = styled.li`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  gap: 8px;
  & * {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: ${p => p.theme.spacing[1]}px;
    align-self: flex-end;
    font-weight: ${p => p.theme.fontWeights.normal};
    //display: flex;
  }

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing[2]}px;
  }
  @media screen and (min-width: 768px) {
    gap: 46px;
  }
  @media screen and (min-width: 1280px) {
    & * {
      padding-bottom: ${p => p.theme.spacing[3]}px;
      padding-top: ${p => p.theme.spacing[2]}px;
    }
  }
`;

export const TitleDairy = styled.div`
  text-align: left;
`;

export const WeightDairy = styled.div`
  text-align: right;
`;

export const CalDairy = styled.div`
  text-align: right;
`;

export const ButtonX = styled.button`
  display: block;
  background: transparent;
  border: none;
  width: 10px;
  color: ${p => p.theme.colors.text.mediumText};
`;

export const UlDairy = styled.ul`
  height: 244px;
  overflow: scroll;
  @media screen and (min-width: 768px){
    width: 768px;
    
  }
  @media screen and (min-width: 1280px) {
    height: 270px;
    width: 271px;
  }
`;

// list of items
