import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container className="text-center mt-5">
      <h1>404 - Pagina non trovata</h1>
      <p>Ops! Sembra che tu ti sia perso.</p>
      <Button variant="info" onClick={() => navigate('/')}>Torna in Homepage</Button>
    </Container>
  );
};

export default NotFound;