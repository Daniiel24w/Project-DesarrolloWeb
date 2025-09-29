import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getItemById, updateItem, deleteItem } from '../../api/api';
import toast from 'react-hot-toast';

import background from "../../Images/background2.png";

const COLLECTION_NAME = 'books';

function BookDetail() {
  const bookdetailStyle = {
    container: {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "2rem",
      fontFamily: "sans-serif",
      minHeight: "100vh",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    spinnerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40vh",
    },
    spinner: {
      border: "6px solid #f3f3f3",
      borderTop: "6px solid #3498db",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      animation: "spin 1s linear infinite",
    },
    error: {
      textAlign: "center",
      fontSize: "1.5rem",
      color: "#e74c3c",
      paddingTop: "2rem",
    },
    content: {
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
    },
    image: {
      width: "100%",
      maxWidth: "300px",
      height: "300px",
      objectFit: "cover",
      borderRadius: "8px",
      border: "1px solid #eee",
    },
    info: {
      flex: 1,
      fontSize: "1.5rem",
      color: "gray",
    },
    name: {
      fontSize: "3rem",
      margin: "0 0 1rem",
      color: "white",
    },
    price: {
      fontSize: "2rem",
      color: "#27ae60",
      margin: "1rem 0",
      fontWeight: "bold",
    },
    stock: {
      fontSize: "1.2rem",
      color: "#7f8c8d",
    },
    buttonGroup: {
      display: "flex",
      gap: "1rem",
      marginTop: "2rem",
      flexWrap: "wrap",
    },
    button: {
      flex: 1,
      textDecoration: "none",
      textAlign: "center",
      padding: "0.8rem 1.5rem",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1.5rem",
      transition: "background-color 0.2s",
      color: "white",
      minWidth: "120px",
    },
    backButton: {
      display: "inline-block",
      marginTop: "2rem",
      textDecoration: "none",
      padding: "0.8rem 1.5rem",
      background: "gray",
      color: "white",
      borderRadius: "4px",
      fontSize: "1.5rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      marginTop: "1rem",
    },
    input: {
      padding: "0.75rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "1rem",
    },
    errorMessage: {
      color: "#ef4444",
      marginTop: "-0.5rem",
      fontSize: "0.875rem",
    },
  };

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const fetchBook = async () => {
    const item = await getItemById(COLLECTION_NAME, id);
    if (item) {
      setBook(item);
      setValue("titulo", item.titulo);
      setValue("autor", item.autor);
      setValue("precio", item.precio);
      setValue("stock", item.stock);
      setValue("image", item.image);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  const onUpdateSubmit = async (data) => {
    const bookData = {
      ...data,
      precio: parseFloat(data.precio),
      stock: parseInt(data.stock, 10),
    };

    const success = await updateItem(COLLECTION_NAME, id, bookData);
    if (success) {
      toast.success('Libro actualizado con éxito.');
      setIsEditing(false);
      fetchBook();
    } else {
      toast.error('Error al actualizar el libro.');
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${book.titulo}"?`)) {
      const success = await deleteItem(COLLECTION_NAME, id);
      if (success) {
        toast.success('Libro eliminado con éxito.');
        navigate('/books');
      } else {
        toast.error('Hubo un error al eliminar el libro.');
      }
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div style={bookdetailStyle.spinnerContainer}>
          <div style={bookdetailStyle.spinner}></div>
        </div>
      );
    }

    if (!book) {
      return <div style={bookdetailStyle.error}>Libro no encontrado.</div>;
    }

    if (isEditing) {
      return (
        // Si se presiona editar muestra esta pantalla
        <div className='container p-4 rounded-4 bg-dark'>
          <h2 className='text-white'><b>Editando:</b> {book.titulo}</h2>
          <form onSubmit={handleSubmit(onUpdateSubmit)} style={bookdetailStyle.form}>
            <input style={bookdetailStyle.input} placeholder="Título" {...register("titulo", { required: "El título es obligatorio" })} />
            {errors.titulo && <p style={bookdetailStyle.errorMessage}>{errors.titulo.message}</p>}

            <input style={bookdetailStyle.input} placeholder="Autor" {...register("autor", { required: "El autor es obligatorio" })} />
            {errors.autor && <p style={bookdetailStyle.errorMessage}>{errors.autor.message}</p>}

            <input style={bookdetailStyle.input} placeholder="Precio" type="number" step="0.01" {...register("precio", { required: "El precio es obligatorio" })} />
            {errors.precio && <p style={bookdetailStyle.errorMessage}>{errors.precio.message}</p>}

            <input style={bookdetailStyle.input} placeholder="Stock" type="number" {...register("stock", { required: "El stock es obligatorio" })} />
            {errors.stock && <p style={bookdetailStyle.errorMessage}>{errors.stock.message}</p>}

            <input style={bookdetailStyle.input} placeholder="URL de la portada" {...register("image", { required: "La portada es obligatoria" })} />
            {errors.image && <p style={bookdetailStyle.errorMessage}>{errors.image.message}</p>}

            <div style={bookdetailStyle.buttonGroup}>
              <button type="submit" style={{ ...bookdetailStyle.button, background: '#3498db' }}>Guardar Cambios</button>
              <button type="button" onClick={() => setIsEditing(false)} style={{ ...bookdetailStyle.button, background: '#95a5a6' }}>Cancelar</button>
            </div>
          </form>
        </div>
      );
    }

    return (

      // Renderizado del detalle del libro
      <div className='container p-4 rounded-4 bg-dark'>
        <div style={bookdetailStyle.content}>
          <img src={book.image} alt={book.titulo} style={bookdetailStyle.image}
            onError={(e) => e.target.src='https://placehold.co/300x300/eee/ccc?text=Error'} />
          <div style={bookdetailStyle.info}>
            <h1 style={bookdetailStyle.name}>{book.titulo}</h1>
            <p><strong>Autor:</strong> {book.autor}</p>
            <p style={bookdetailStyle.price}>${book.precio?.toFixed(2)}</p>
            <p style={bookdetailStyle.stock}>Unidades disponibles: {book.stock}</p>
            <div style={bookdetailStyle.buttonGroup}>
              <button onClick={() => setIsEditing(true)} style={{ ...bookdetailStyle.button, background: '#f1c40f' }}>Editar</button>
              <button onClick={handleDelete} style={{ ...bookdetailStyle.button, background: '#e74c3c' }}>Eliminar</button>
            </div>
          </div>
        </div>
        <Link to="/books" style={bookdetailStyle.backButton}>← Volver al listado</Link>
      </div>
    );
  };

  return (
    <div style={bookdetailStyle.container}>
      {renderContent()}
    </div>
  );
}

export default BookDetail;

