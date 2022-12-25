import logoMobile from '../../images/logo/logoMobile.png';
import logoMobileRetina from '../../images/logo/logoMobileRetina.png';
import logoTablet from '../../images/logo/logoTablet.png';
import logoTabletRetina from '../../images/logo/logoTabletRetina.png';
import logoDesktop from '../../images/logo/logoDesktop.png';
import logoDesktopRetina from '../../images/logo/logoDesktopRetina.png';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { Logo } from './Logo.styled';

export const LogoMain = () => {
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const takeLogo = () => {
    if (isMobile) {
      return logoMobile;
    } else if (isTablet) {
      return logoTablet;
    } else if (isDesktop) {
      return logoDesktop;
    } else if (isMobile && isRetina) {
      return logoMobileRetina;
    } else if (isTablet && isRetina) {
      return logoTabletRetina;
    } else if (isDesktop && isRetina) {
      return logoDesktopRetina;
    }
  };

  return (
    <>
      <Link to={'/'}>
        <Logo src={takeLogo()} />
      </Link>
    </>
  );
};
