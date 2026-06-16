import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, test, expect, afterEach } from 'vitest';
import App from './App';
import historyBooks from './history.json';

afterEach(cleanup);

describe('EpiBooks Final Exam Tests', () => {

  test('1. renders Welcome component', () => {
    render(<App />);
    const welcomeHeader = screen.getByText(/benvenuti in epibooks/i);
    expect(welcomeHeader).toBeInTheDocument();
  });

  test('2. renders all books from json', () => {
    render(<App />);
    const allBookCards = screen.getAllByTestId('book-card');
    expect(allBookCards.length).toBe(historyBooks.length);
  });

  test('3. renders CommentArea', () => {
    render(<App />);
    const commentArea = screen.getByTestId('comment-area');
    expect(commentArea).toBeInTheDocument();
  });

  test('4. filters books by search input', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/cerca un libro/i);
    fireEvent.change(searchInput, { target: { value: 'the' } });
    const filteredBooks = screen.getAllByTestId('book-card');
    const expected = historyBooks.filter(b => b.title.toLowerCase().includes('the')).length;
    expect(filteredBooks.length).toBe(expected);
  });

  test('5. changes border color on click', () => {
    render(<App />);
    const allBookCards = screen.getAllByTestId('book-card');
    fireEvent.click(allBookCards[0]);
    
    // Verifichiamo il colore nel formato RGB che JSDOM preferisce
    expect(allBookCards[0]).toHaveStyle('border-color: rgb(255, 0, 0)');
  });

  test('6. restores border of previous book when a new one is clicked', () => {
    render(<App />);
    const allBookCards = screen.getAllByTestId('book-card');
    
    fireEvent.click(allBookCards[0]);
    fireEvent.click(allBookCards[1]);
    
    expect(allBookCards[0]).not.toHaveStyle('border-color: rgb(255, 0, 0)');
    expect(allBookCards[1]).toHaveStyle('border-color: rgb(255, 0, 0)');
  });

  test('7. should not have any SingleComment in the DOM at start', () => {
    render(<App />);
    const comments = screen.queryAllByTestId('single-comment');
    expect(comments.length).toBe(0);
  });

  test('8. should load comments when clicking a book', async () => {
    render(<App />);
    const allBookCards = screen.getAllByTestId('book-card');
    fireEvent.click(allBookCards[0]);
    
    const commentListItems = await screen.findAllByTestId('single-comment');
    expect(commentListItems.length).toBeGreaterThanOrEqual(0);
  });
});