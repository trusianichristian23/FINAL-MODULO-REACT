import React, { useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { ThemeContext } from './ThemeContext';
import { useNavigate } from 'react-router-dom';

const SingleBook = ({ book, selectedAsin, changeSelectedBook }) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const isSelected = selectedAsin === book.asin;

  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <Card
        data-testid="book-card"
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          borderColor: isSelected ? '#ff0000' : '#dddddd',
          borderWidth: isSelected ? '3px' : '1px',
          borderStyle: 'solid',
          backgroundColor: theme === 'dark' ? '#333' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000',
          cursor: 'pointer'
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title className="text-truncate">{book.title}</Card.Title>
          <Button 
            variant="primary" 
            className="w-100 mt-2"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/details/${book.asin}`);
            }}
          >
            Vedi Dettagli
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;