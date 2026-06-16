import React from 'react';
import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

const CommentsList = ({ comments }) => (
    <ListGroup className="mb-3 shadow-sm">
        {comments.length === 0 && (
            <ListGroup.Item>Nessuna recensione presente.</ListGroup.Item>
        )}
        {comments.map((c) => (
            <SingleComment key={c._id} comment={c} />
        ))}
    </ListGroup>
);

export default CommentsList;