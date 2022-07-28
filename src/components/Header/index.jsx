import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./style";

export function Header() {
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Caarlos7x.png" 
        alt="foto de perfil" />

        <div>
          <span>Bem-vindo</span>
          <strong>Carlos Augusto</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}