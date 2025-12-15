# Tech Talent ReactJS - Tienda

Este proyecto es un e-commerce desarrollado como parte del curso de ReactJS de Talento Tech. La aplicación permite a los usuarios navegar por un catálogo de productos, gestionar un carrito de compras y acceder a un panel de administración para actualizar el inventario.

## Tecnologías Utilizadas

- **React 19**: Librería principal para la interfaz de usuario.
- **Vite**: Empaquetador y entorno de desarrollo rápido.
- **React Router 7**: Manejo de rutas y navegación.
- **Context API**: Gestión del estado global (Carrito y Autenticación).
- **CSS3**: Estilos personalizados con variables CSS.
- **Axios**: Cliente HTTP para consumo de API.
- **React Toastify**: Notificaciones para el usuario.
- **MockAPI**: Backend simulado para persistencia de datos.

## Instalación y Uso

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/sofffja/talentotech-reactjs.git
   cd talentotech-reactjs
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto:

   ```env
   VITE_API_URL=https://tu-api-url.mockapi.io/api/v1
   ```

4. **Iniciar el servidor de desarrollo**:

   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**:
   La aplicación estará disponible en `http://localhost:5173`.

## Credenciales de Acceso

Para acceder al panel de administración:

- **Usuario**: `admin`
- **Contraseña**: `password`

---

Desarrollado para Talento Tech.
