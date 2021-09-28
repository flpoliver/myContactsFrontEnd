import { useTheme } from 'styled-components';
import { Container, InputSearchContainer } from './styles';

export default function Header() {
  const theme = useTheme();

  return (
    <Container>
      <img src={theme.logo} alt="MyContacts" width="201" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
    </Container>
  );
}
