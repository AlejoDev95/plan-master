# Plan Master

## Pasos para grabar el contenido

- Mostrar el resultado final, mencionar que tecnologias se van a utilizar, que conocimientos previos se necesitan y que conocimientos se van a reforzar o aprender.
- Video explicando como instalar las herramientas necesarias para crear el proyecto.

## Pasos para grabar el contenido del Front

- Explicar la organización final de las carpetas y el porque se diseño así.

- Crear el proyecto inicial con vite.

  - Eliminación y modificación de los archivos.
  - Inicialización del proyecto el git.

- Creación de los componentes iniciales

  - Header
    - Title
    - Boton mock para indicar que ahí ira el botón para cambiar de tema.
  - Footer
    - Filters
    - Boton para crear TODOS
    - Items left
  - InputFilter
  - TodoList
    - Todo item con el titulo del todo y los botones de ver detalles, editar y eliminar
  - Comentar que proximamente se construira el modal que servira para crear nuevas tareas.

- Creación del esquelo de la App.

  - Objetivo es ubicar los componentes previamente creados.

- Estilizar los componentes

  - En este punto debo revisar el resultado final y determinar los estilos que apareceran en este punto. Definir los colores de la App en este punto.

- Instalación y configuración de los iconos

  - El objetivo es inslarar la lib **lucide-react**, explicar que son y el problema de dependencias ocultas y mostrar como aplicar el patrón adaptador para solucionar esta dependencia oculta.

- Primera prueba de nuestro componente de icons y creación de la logica necesaria para cambiar de tema.

- Ajustando iconos faltantes.

- Explicar que son los portals en React y como los usaremos para crear diferenres modales, uno para ver los detalles del Todo y otro para crear los Todos.

- Creación del componente Modal con sus children. Explicar como este componente servira de cascaron para contender a otros componentes.

- Creación del formulario para crear todos. En este punto aun no tendremos la logica solo sera el aspecto visual.

- Creación del componente para mostrar los detalles del TODO.

- Creación del metodo para editar el todo, por el momento solo abrira el modal con el formulario
