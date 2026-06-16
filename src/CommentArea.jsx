import React, { useState, useEffect, useContext } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import { ThemeContext } from './ThemeContext';

export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NTVhZWJhMGYxMjAwMTUyZTc3NmUiLCJpYXQiOjE3Nzc1NzIzNzAsImV4cCI6MTc3ODc4MTk3MH0.dy6gGBLPrFz2TNWeWwcIWhVvTauLyAHGaKmx8kCrh-c';

const CommentArea = ({ asin }) => {
    const { theme } = useContext(ThemeContext);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchComments = async () => {
        if (!asin) return;

        setIsLoading(true);
        setError(false);
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
                headers: { 'Authorization': `Bearer ${TOKEN}` }
            });

            if (response.ok) {
                const data = await response.json();
                setComments(data);
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [asin]);

    return (
        <div data-testid="comment-area" className={`p-3 border rounded mt-2 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}>
            <h4>Recensioni</h4>
            {!asin && <Alert variant="info">Seleziona un libro per leggere i commenti.</Alert>}

            {isLoading && <Spinner animation="border" role="status" className="d-block my-2" />}
            {error && <Alert variant="danger">Errore nel caricamento.</Alert>}

            {asin && !isLoading && !error && (
                <>
                    <CommentsList comments={comments} />
                    <AddComment asin={asin} onCommentAdded={fetchComments} />
                </>
            )}
        </div>
    );
};

export default CommentArea;