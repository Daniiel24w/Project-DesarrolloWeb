# Project-DesarrolloWeb

Este proyecto es una aplicación web desarrollada en **React**, con base de datos en **Firebase** y desplegada en **Vercel**.

---

## 🚀 Requisitos previos

Antes de empezar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/es/download/) (incluye `npm`)
- [Git](https://git-scm.com/)

---

## 📥 Instalación y ejecución en local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Daniiel24w/Project-DesarrolloWeb
   ```

2. **Entrar a la carpeta del proyecto**
   ```bash
   cd Project-DesarrolloWeb
   ```

3. **Instalar dependencias**  
   (esto descargará React Router, React Hook Form, Firebase, etc. automáticamente)
   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

   > Se abrirá una ventana en tu navegador en `http://localhost:3000` mostrando la aplicación.

---

## ⚙️ Variables de entorno

El proyecto utiliza **Firebase**. Para conectarse correctamente se necesita un archivo `.env` en la raíz con las credenciales de Firebase:

```
REACT_APP_FIREBASE_API_KEY=xxxx
REACT_APP_FIREBASE_AUTH_DOMAIN=xxxx
REACT_APP_FIREBASE_PROJECT_ID=xxxx
REACT_APP_FIREBASE_STORAGE_BUCKET=xxxx
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxx
REACT_APP_FIREBASE_APP_ID=xxxx
```

> ⚠️ Este archivo `.env` **no se sube a GitHub** por seguridad. Cada usuario debe tener sus propias credenciales.

---

## 🌐 Despliegue

El proyecto está desplegado en [Vercel](https://vercel.com/).  
Para desplegarlo manualmente en tu propia cuenta:

1. Crear un proyecto en [Vercel](https://vercel.com/).
2. Conectar el repositorio de GitHub.
3. Configurar las variables de entorno en **Settings → Environment Variables**.
4. Vercel detectará automáticamente que es un proyecto de **React** y hará el build.

---

## 📚 Tecnologías usadas

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Firebase](https://firebase.google.com/)
- [Vercel](https://vercel.com/)

---

## 👤 Autor
- **Daniel Medina**  
[GitHub](https://github.com/Daniiel24w)
