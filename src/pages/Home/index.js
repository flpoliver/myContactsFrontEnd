import { Link } from 'react-router-dom';

import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      <Modal />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Felipe Oliveira</strong>
              <small>instagram</small>
            </div>
            <span>oliver@dev.com</span>
            <span>(11) 99999-8888</span>
          </div>

          <div className="actions">
            <Link to="/edit/1">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Felipe Oliveira</strong>
              <small>instagram</small>
            </div>
            <span>oliver@dev.com</span>
            <span>(11) 99999-8888</span>
          </div>

          <div className="actions">
            <Link to="/edit/1">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Felipe Oliveira</strong>
              <small>instagram</small>
            </div>
            <span>oliver@dev.com</span>
            <span>(11) 99999-8888</span>
          </div>

          <div className="actions">
            <Link to="/edit/1">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
