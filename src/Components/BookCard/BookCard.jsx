import React from 'react'
import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";

function BookCard({ book }) {
  if (!book) return null;

  const bookcardStyle = {
    tarjeta: {
      width: '16rem',
    },
    imagen: {
      width: '400px',
      height: '16rem',
    },
    text: {
            color: "#A4BAB7",
            fontSize: "1rem",
            lineHeight: "1.5",
            padding: "0px 16px",
    },
  }

  return (
    <div className='container card bg-dark' style={bookcardStyle.tarjeta}>
        <img className="card-img-top img-fluid border-bottom" style={bookcardStyle.imagen} src={book.image} alt={book.titulo} onError={(e) => (e.target.src = "https://placehold.co/400x400/eee/ccc?text=Sin+Portada")}/>
        <div className='card-body' style={bookcardStyle.text}>
            {/* Parte del texto de la tarjeta */}
            <h3 className='card-title'>{book.titulo}</h3>
            <div className='container text-start'>
              <ul>
                <li><p className='card-text'><b>Autor:</b> {book.autor}</p></li> 
                {book.precio && (<li><p className='card-text'><b>Precio:</b> ${book.precio?.toFixed(2)}</p></li>)}
                <li><p className='card-text'><b>Unidades:</b> {book.stock}</p></li> 
              </ul>  
            </div>
        </div>
        {/* Parte del boton */}
        <div className='mb-3'>
          <Link className='btn btn-primary' to={`/book/${book.id}`}>Ver Detalles</Link>
        </div>
    </div>
  )
}

export default BookCard

