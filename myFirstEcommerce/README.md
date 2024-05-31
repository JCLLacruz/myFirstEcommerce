# MyFirstEcommerce

## Descripción

MyFirstEcommerce es una aplicación de comercio electrónico construida con React, que utiliza varias tecnologías modernas para ofrecer una experiencia de usuario rica y dinámica. La aplicación permite a los administradores gestionar productos y pedidos, mientras que los usuarios pueden navegar y comprar productos.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Ant Design**: Framework de componentes UI para React.
- **Axios**: Cliente HTTP para hacer peticiones a la API.
- **Bootstrap**: Framework CSS para el diseño responsivo y estilizado.
- **jQuery**: Biblioteca de JavaScript utilizada principalmente para manipulación del DOM.
- **Popper.js**: Biblioteca para manejar poppers (ventanas emergentes).
- **React Router DOM**: Biblioteca para manejar el enrutamiento en React.
- **Sass**: Preprocesador CSS para estilos más mantenibles y modulares.

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tuusuario/myfirstecommerce.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd myfirstecommerce
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia la aplicación:

    ```bash
    npm start
    ```

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

- `src/`
  - `assets/`: Contiene los archivos estáticos como imágenes y fuentes.
  - `components/`: Componentes React utilizados en la aplicación.
    - `AdminConsole/`: Componentes relacionados con la consola de administración.
      - `AdminConsole.jsx`: Componente principal de la consola de administración.
      - `AdminConsole.scss`: Estilos para `AdminConsole`.
    - `AdminOrders/`: Componentes relacionados con la administración de pedidos.
      - `AdminOrders.jsx`: Componente principal para administrar pedidos.
    - `AdminProducts/`: Componentes relacionados con la administración de productos.
      - `AdminProducts.jsx`: Componente principal para administrar productos.
      - `AdminProducts.scss`: Estilos para `AdminProducts`.
    - `Cart/`: Componentes relacionados con el carrito de compras.
      - `Cart.jsx`: Componente principal del carrito de compras.
    - `Footer/`: Componentes relacionados con el pie de página.
      - `MyFooter.jsx`: Componente principal del pie de página.
      - `MyFooter.scss`: Estilos para `MyFooter`.
    - `Header/`: Componentes relacionados con el encabezado.
      - `Header.jsx`: Componente principal del encabezado.
      - `Header.scss`: Estilos para `Header`.
    - `Home/`: Componente principal de la página de inicio.
      - `Home.jsx`
    - `Login/`: Componentes relacionados con el inicio de sesión.
      - `Login.jsx`: Componente principal para el inicio de sesión.
      - `Login.scss`: Estilos para `Login`.
    - `Product/`: Componentes relacionados con los productos.
      - `Product.jsx`: Componente principal para mostrar un producto.
      - `Product.scss`: Estilos para `Product`.
    - `Products/`: Componentes relacionados con la lista de productos.
      - `Products.jsx`: Componente principal para mostrar la lista de productos.
      - `Products.scss`: Estilos para `Products`.
    - `Profile/`: Componentes relacionados con el perfil del usuario.
      - `Profile.jsx`: Componente principal del perfil del usuario.
      - `Profile.scss`: Estilos para `Profile`.
    - `Register/`: Componentes relacionados con el registro de usuarios.
      - `Register.jsx`: Componente principal para el registro de usuarios.
      - `Register.scss`: Estilos para `Register`.
  - `context/`: Contextos de React para manejar el estado global.
    - `ProductContext/`: Contexto para los productos.
      - `ProductContext.js`
      - `ProductReducer.js`
      - `ProductState.js`
    - `UserContext/`: Contexto para los usuarios.
      - `UserContext.js`
      - `UserReducer.js`
      - `UserState.js`
  - `services/`: Servicios para hacer peticiones a la API.
    - `OrderService.js`: Servicio para manejar las peticiones relacionadas con los pedidos.

## Funcionalidades

### Administración de Productos

- **Visualización de Productos**: Los administradores pueden ver todos los productos disponibles.
- **Edición de Productos**: Los administradores pueden editar la información de los productos.
- **Eliminación de Productos**: Los administradores pueden eliminar productos de la base de datos.

### Administración de Pedidos

- **Visualización de Pedidos**: Los administradores pueden ver todos los pedidos realizados.
- **Edición de Pedidos**: Los administradores pueden actualizar el estado de los pedidos.

### Carrito de Compras

- **Añadir al Carrito**: Los usuarios pueden añadir productos al carrito.
- **Eliminar del Carrito**: Los usuarios pueden eliminar productos del carrito.
- **Visualización del Carrito**: Los usuarios pueden ver los productos en su carrito.

### Autenticación

- **Inicio de Sesión**: Los usuarios pueden iniciar sesión.
- **Registro**: Los nuevos usuarios pueden registrarse.

## Contribuir

Las contribuciones son bienvenidas. Puedes hacer un fork del repositorio y enviar un pull request con tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
"""

