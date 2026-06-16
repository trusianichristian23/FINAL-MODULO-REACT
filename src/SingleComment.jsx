import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
    return (
        <ListGroup.Item data-testid="single-comment" className="d-flex justify-content-between align-items-center">
            <span>{comment.comment}</span>
            <span className="badge bg-primary rounded-pill">
                {comment.rate}/5
            </span>
        </ListGroup.Item>
    );
};

export default SingleComment;