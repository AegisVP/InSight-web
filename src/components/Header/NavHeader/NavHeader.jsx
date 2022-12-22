import { Exit, Name, NavHeaderContainer } from './NavHeader.styled';

export const NavHeader = () => {
  return (
    <>
      <NavHeaderContainer>
        <Name type="button">Name</Name>
        <Exit type="button">Exit</Exit>
      </NavHeaderContainer>
    </>
  );
};
