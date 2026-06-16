import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => (
  <footer className="bg-dark text-white mt-5 py-3">
    <Container>
      <Row>
        <Col className="text-center">
          <p>&copy; 2026 EpiBooks - Il tuo paradiso della storia</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default MyFooter;