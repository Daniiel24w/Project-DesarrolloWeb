import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createItem } from '../../api/api';
import toast from 'react-hot-toast';

// Importo la imagen de fondo
import background from "../../Images/background2.png";

const COLLECTION_NAME = 'books';

function BookCreate() {
  const bookCreateStyle = {
    container: {
      width: "100%",
      minHeight: "100vh", // Abarca toda la pantalla
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    containerForm: {
      background: "rgba(0, 0, 0, 0.8)",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      maxWidth: "600px",
      width: "100%",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    input: {
      padding: "0.75rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "1rem",
    },
    button: {
      padding: "0.8rem",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background-color 0.2s",
      color: "white",
      background: "#3498db",
    },
    error: {
      color: "#e74c3c",
      fontSize: "0.875rem",
    },
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const bookData = {
      titulo: data.titulo,
      autor: data.autor,
      anio: parseInt(data.anio, 10),
      portada: data.portada || "https://placehold.co/200x300?text=Sin+portada",
      descripcion: data.descripcion || "",
      stock: parseInt(data.stock || 0, 10),
    };
    const newItem = await createItem(COLLECTION_NAME, bookData);
    if (newItem) {
      toast.success('Libro creado con éxito.');
      navigate('/books');
    } else {
      toast.error('Error al crear el libro.');
    }
  };

  return (
    <div className="py-5" style={bookCreateStyle.container}>

      <div className="container align-items-center border rounded-4 border-3 border-dark p-5" style={bookCreateStyle.containerForm}>

        <form onSubmit={handleSubmit(onSubmit)} style={bookCreateStyle.form}>
          {/* Titulo del formulario */}
          <h2 className='container text-white'>Agregar Nuevo Libro</h2>

          {/* Inputs del formulario */}
          <input
            placeholder="Título"
            {...register("titulo", { required: "El título es obligatorio" })}
            style={bookCreateStyle.input}
          />
          {errors.titulo && <p style={bookCreateStyle.error}>{errors.titulo.message}</p>}

          <input
            placeholder="Autor"
            {...register("autor", { required: "El autor es obligatorio" })}
            style={bookCreateStyle.input}
          />
          {errors.autor && <p style={bookCreateStyle.error}>{errors.autor.message}</p>}

          <input
            placeholder="Precio"
            type="number"
            step="0.01"
            {...register("precio", { required: "El precio es obligatorio" })}
            style={bookCreateStyle.input}
          />
          {errors.precio && <p style={bookCreateStyle.error}>{errors.precio.message}</p>}

          <input
            placeholder="Stock"
            type="number"
            {...register("stock", { required: "El stock es obligatorio" })}
            style={bookCreateStyle.input}
          />
          {errors.stock && <p style={bookCreateStyle.error}>{errors.stock.message}</p>}

          <input
            placeholder="URL de la portada"
            {...register("portada", { required: "La portada es obligatoria" })}
            style={bookCreateStyle.input}
          />
          {errors.portada && <p style={bookCreateStyle.error}>{errors.portada.message}</p>}

          <button type="submit" style={bookCreateStyle.button}>Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default BookCreate;
