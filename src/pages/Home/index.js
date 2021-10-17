import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
// import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (res) => {
        const json = await res.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('erro', error);
      });
  }, []);

  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {' '}
          {contacts.length === 1 ? 'contato' : 'contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        {contacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact?.name}</strong>
                {contact.category_name && <small>{contact?.category_name}</small>}
              </div>
              <span>{contact?.email}</span>
              <span>{contact?.phone}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        ))}
      </ListContainer>
    </Container>
  );
}

// SOP -> Same Origin Policy -> Política de mesma origem
// CORS -> Cross-Origin Resource Sharing -> Compartilhamento ded recursos entre origens diferentes
// Origem: protocolo://domínio:porta

//    Saída: http://localhost:3000
//  Destino: http://localhost:3001

// Preflight -> Pré-voô
// OPTIONS http://localhost:3001/contacts
