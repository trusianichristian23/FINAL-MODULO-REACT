import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TOKEN } from './CommentArea';

const AddComment = ({ asin, onCommentAdded }) => {
    const [newComment, setNewComment] = useState({
        comment: '',
        rate: '1',
        elementId: asin
    });

    useEffect(() => {
        setNewComment(prev => ({ ...prev, elementId: asin }));
    }, [asin]);

    const handleSendComment = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(newComment),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`
                }
            });

            if (response.ok) {
                alert("Recensione inviata con successo!");
                setNewComment({
                    comment: '',
                    rate: '1',
                    elementId: asin
                });
                if (onCommentAdded) onCommentAdded();
            } else {
                alert("Errore nell'invio del commento");
            }
        } catch (err) {
            console.error("Errore di rete:", err);
        }
    };

    return (
        <Form onSubmit={handleSendComment} className="mt-3 pt-3 border-top">
            <h6>Aggiungi recensione</h6>
            <Form.Group className="mb-2">
                <Form.Control
                    type="text"
                    placeholder="Scrivi qui la tua recensione..."
                    value={newComment.comment}
                    onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label className="small">Voto (1-5):</Form.Label>
                <Form.Control
                    type="number"
                    min="1"
                    max="5"
                    value={newComment.rate}
                    onChange={(e) => setNewComment({ ...newComment, rate: e.target.value.toString() })}
                    required
                />
            </Form.Group>

            <Button type="submit" variant="success" className="w-100 shadow-sm">
                Invia Recensione
            </Button>
        </Form>
    );
};

export default AddComment;