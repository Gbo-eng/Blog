# Blog
**Introducción**

Esto es un proyecto para el desarrollo de un módulo CRUD para las publicaciones de un blog. En él, utilizaremos Angular para crear un sistema que permita listar, ver, insertar, actualizar y eliminar publicaciones de un blog. Para simplificar el backend, usaremos la API del servicio web JSONPlaceholder.

## Funcionamiento
- **Conexión con la API**: Configuramos un servicio en Angular para conectarnos a la API de JSONPlaceholder, que nos proporciona los datos de los posts. Utilizamos este servicio para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos remota.
- **Componentes del CRUD**: Desarrollamos diferentes componentes para cada acción del CRUD: listado, vista individual, creación y actualización de posts. Estos componentes nos permiten interactuar con los datos de manera intuitiva y eficiente.
- **Enrutamiento**: Configuramos las rutas del proyecto utilizando el archivo app.routes.ts. Esto nos permite navegar entre los diferentes componentes del CRUD utilizando la barra de direcciones del navegador.
- **Modelo de Datos**: Creamos una interfaz para los objetos de tipo post, que define la estructura de los datos que recibimos de la API. Esta interfaz nos ayuda a mantener una estructura coherente en nuestros datos y facilita su manipulación.
- **Servicio de Posts**: Implementamos un servicio en Angular para manejar todas las operaciones relacionadas con los posts. Este servicio utiliza el módulo HttpClient para realizar solicitudes HTTP a la API y proporciona métodos para listar, crear, actualizar y eliminar posts.
- **Componentes Visuales**: Diseñamos plantillas HTML y estilizamos nuestros componentes utilizando Bootstrap 5. Esto nos permite crear una interfaz de usuario atractiva y receptiva que se adapta a diferentes dispositivos y tamaños de pantalla.

## Uso
1. **Listado**: Accedemos al componente de listado de posts para ver una tabla con todos los posts disponibles. Cada fila de la tabla muestra el título del post y opciones para ver, editar o eliminar el post.
2. **Creación de Posts**: Nos dirigimos al componente de creación de posts para agregar un nuevo post. Completamos el formulario con el título y el cuerpo del post y luego lo enviamos para guardarlo en la base de datos.
3. **Edición**: Navegamos al componente de edición de posts para modificar un post existente. Seleccionamos el post que deseamos editar y actualizamos los campos necesarios. Luego, guardamos los cambios para actualizar el post en la base de datos.
4. **Visualización**: Visitamos el componente de visualización de posts para ver los detalles de un post específico. Aquí encontramos el título y el cuerpo del post, así como información adicional como el ID del post y el autor.
5. **Eliminación**: En el listado de posts, utilizamos la opción de eliminar para eliminar un post de la base de datos. Confirmamos la eliminación y el post será eliminado permanentemente de la lista.
6. Paginación: Si hay muchos posts en la lista, encontramos controles de paginación en la parte inferior para navegar entre las diferentes páginas de resultados.
