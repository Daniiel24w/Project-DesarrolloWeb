import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getItems } from '../../api/api';
import BookCard from '../../components/BookCard/BookCard';

import background from "../../Images/background2.png";

const COLLECTION_NAME = 'books';

function Books() {

  const booksStyle = {
    container: {
      padding: "5rem",
      minHeight: "100vh",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    divisiones: {
      backgroundColor: "#EAE1DF",
      borderRadius: "8px",
      padding: "1rem",
    },
    
  }

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const items = await getItems(COLLECTION_NAME);
      setBooks(items);
      setLoading(false);
    };
    fetchBooks();
  }, []);

  return (
    <div style={booksStyle.container}>
      {/* Parte de arriba Texto y Boton de agregar libro */}
      <div className="container rounded-5 py-3 my-3" style={booksStyle.divisiones}> 
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="text-dark">Nuestros Libros</h1>
          <Link className="btn btn-success p-3" to="/books/nuevo">+ Agregar Libro</Link>
        </div>
      </div>
    
      {/* Parte de abajo. Esto abarca el loading y las tarjetas cargadas */}
      <div className="container rounded-5 py-3 my-3" style={booksStyle.divisiones}>
        <div className='row justify-content-between'>
          {loading ? (
            // Parte del cargando...
            <div className='spinner-border' role='status'></div>
          ) : (
            // Cargado de las tarjetas de los libros
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Books