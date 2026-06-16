import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

const AllTheBooks = ({ books, searchQuery }) => {
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <Row>
            {books
              ?.filter((book) =>
                book?.title?.toLowerCase().includes(searchQuery.toLowerCase())
              )
              ?.map((book) => (
                <SingleBook
                  key={book.asin}
                  book={book}
                  selectedAsin={selectedAsin}
                  changeSelectedBook={(asin) => setSelectedAsin(prev => prev === asin ? null : asin)}
                />
              ))}
          </Row>
        </Col>

        <Col md={4}>
          <div className="sticky-top" style={{ top: '20px' }}>
            <CommentArea asin={selectedAsin} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllTheBooks;