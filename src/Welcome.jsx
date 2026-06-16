import { Alert, Container } from 'react-bootstrap';

const Welcome = () => (
  <Container className="my-4">
    <h1 className="display-4 text-center">Benvenuti in EpiBooks!</h1>
    <Alert variant="info" className="text-center">
      Esplora la nostra vasta collezione di libri storici selezionati per te.
    </Alert>
  </Container>
);

export default Welcome;