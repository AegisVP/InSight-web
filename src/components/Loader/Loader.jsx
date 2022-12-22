import FruitItem from './LoaderDivItem';
import { Overlay } from './Loader.styled';

export const Loader = props => {
  return (
    <Overlay {...props}>
      <FruitItem />
    </Overlay>
  );
};
