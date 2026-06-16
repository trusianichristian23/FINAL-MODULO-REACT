// MyNav.jsx
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const MyNav = ({ searchQuery, setSearchQuery }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Navbar bg={theme} variant={theme} expand="lg">
            <Container>
                <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browser</Nav.Link>
                    </Nav>
                    {/* Input di ricerca spostato qui */}
                    <Form className="d-flex me-3">
                        <Form.Control
                            type="search"
                            placeholder="Cerca un libro..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </Form>
                    <Button variant="outline-info" onClick={toggleTheme}>
                        Tema {theme === 'light' ? 'Dark' : 'Light'}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNav;