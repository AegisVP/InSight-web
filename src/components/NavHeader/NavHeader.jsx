import { useAuth } from 'hooks/useAuth';
import { Exit, Name, NavHeaderContainer } from './NavHeader.styled';

export const NavHeader = () => {
  const { name } = useAuth();
  return (
    <>
      <NavHeaderContainer>
        <Name type="button">Hello {name}</Name>
        <Exit>
          <a href="./logout">Logout</a>
        </Exit>
      </NavHeaderContainer>
    </>
  );
};
