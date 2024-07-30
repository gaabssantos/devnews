import { Button } from '../global.component';
import { Container } from './header.styles';

import Logo from '/devnews.svg';

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="logo-devnews" />
      <ul>
        <li>Esportes</li>
        <li>Política</li>
        <li>Entretenimento</li>
      </ul>
      <Button>Login</Button>
    </Container>
  );
};

export default Header;
