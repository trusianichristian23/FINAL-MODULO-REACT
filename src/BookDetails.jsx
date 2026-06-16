import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import historyBooks from './history.json';
import CommentArea from './CommentArea';

const BookDetails = () => {
  const params = useParams();
  const book = historyBooks.find((b) => b.asin === params.asin);

  if (!book) {
    return <Container className="mt-5 text-center"><h3>Libro non trovato!</h3></Container>;
  }

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>Categoria: {book.category}</Card.Text>
              <Card.Text>Prezzo: {book.price}€</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <CommentArea asin={params.asin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;