import './App.css';
import { Route, Routes } from 'react-router-dom';
// Import de los componentes
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Import de las paginas
import Home from './Pages/Home/Home';
import Books from './Pages/Books/Books';
import Contact from './Pages/Contact/Contact';
import BookDetail from './Pages/BookDetail/BookDetail';
import BookCreate from './Pages/BookCreate/BookCreate';


  function App() {
    return (
      <div className="App">
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/books' element={<Books />} /> 
            <Route path='/contact' element={<Contact />} />

            {/* Libros por ID */}
            <Route path='/book/:id' element={<BookDetail />} /> 
            <Route path='/books/nuevo' element={<BookCreate />} />'

          </Routes>

          <Footer />
      </div>

    );
  }

  export default App;
