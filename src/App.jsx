import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks';
import BookDetails from './BookDetails';
import NotFound from './NotFound';
import historyBooks from './history.json';
import { ThemeProvider } from './ThemeContext';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <main className="flex-grow-1">
            <Welcome />
            <Routes>
              <Route
                path="/"
                element={<AllTheBooks books={historyBooks} searchQuery={searchQuery} />}
              />
              <Route path="/details/:asin" element={<BookDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <MyFooter />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;