# Sprint 2: Red Social con React y Node - Keybook 

## Pasos para arrancar el proyecto
### Base de datos
En phpMyAdmin, crear una base de datos llamada "keybook" e importar el archivo keybook.sql de este repositorio.

Dicho archivo se encuentra en el directorio original, junto a este archivo README.md
### Archivo de environment o .env
Simplemente pegarlo dentro del directorio principal de Backend, junto a app.js, por ejemplo.

### Backend
Accedemos al directorio Backend

 ```
cd Keybook/Backend
```
Instalamos las dependencias:

```
npm i
```
Arrancamos el servidor con uno de estos dos comandos:
```
node index.js  
nodemon
```


## Frontend
Accedemos al directorio Frontend

 ```
cd Keybook/front
```
Instalamos las dependencias:

```
npm i
```
Arrancamos la aplicación de React:
```
npm start
```
Para realizar el testeo detenemos la aplicación de react y ejecutamos lo siguiente:
```
npm test
```

## Presentación del proyecto
Para este Sprint 2 hemos adaptado el proyecto de red social que venimos trabajando durante el curso a React con Node. 

- Se ha actualizado el backend con la estructura ofrecida por Express Generator para tener mayor control y orden en las rutas
- Se han simplificado las vistas, manteniendo únicamente los elementos funcionales y eliminado los elementos decorativos de entregas anteriores
- Se ha añadido un sistema de interacción entre usuarios a través de seguidores, así como opción de escribir y recibir reseñas de otros usuarios
- Se ha añadido la opción de editar todos los campos del perfil en la base de datos, excepto por el email (por seguridad de la cuenta)
- Se ha ampliado la base de datos a 20 usuarios con contraseñas encriptadas (123 para todos), así como una nueva tabla para las reseñas y las relaciones de amistad
- Se ha realizado un pequeño testeo sobre la barra de buscar usuarios (SearchUserBar) con Mocha Chai, solo para ver que se rendericen varios de sus componentes correctamente. Se puede encontrar en la carpeta "testing" dentro de "Frontend"

## Vistas y componentes de la red social
Cada vista incluye al componente relevante, componente Footer y en algunos casos el componente NavBar. 
Las vistas RegisterView y LoginView son de libre acceso, pero el resto están restringidas a usuarios que no hayan iniciado sesión. Sin este permiso, la ruta redirigirá a una vista de error.

- NavBar: barra de navegación con rutas a las diferentes vistas a través de iconos representativos, así como opción de cerrar sesión y filtro de blanco y negro
- Footer:  componente sencillo con nombre de los integrantes del equipo y enlace a este repositorio
- RegisterView: formulario de registro de nuevo usuario, con validación de contraseña segura
- LoginView: página de inicio con logo, slogan y formulario de login  
- EditProfileView: acciso a través del icono de configuración de la NavBar, es un  formulario de edición de datos de usuario  (a excepción del email) con opción de borrar la cuenta
- HomeView: vista que reúne varios componentes. Por un lado, muro de publicaciones dinámico de usuarios seguidos y publicaciones propias, con limitación y paginación. Por otro lado, menús laterales dinámicos de usuarios seguidos y sugerencias de amistad. Además, una pequeña tarjeta con los datos propios. Podemos acceder al perfil de los usuarios a través de sus fotos de perfil. 
- ProfileView: vista de perfil de usuarios con datos personales, hoja de vida y funcionalidad de feedback. Esta función está limitada a una recomendación por usuario por perfil, y no es posible recomendarse a sí mismo.
- UsersView: esta vista nos trae a todos los usuarios de la base de datos, diferenciándolos entre si ya son seguidos por nosotros o no. Además, la barra de búsqueda nos permite encontrar usuarios por nombre o email.


## Cambios para la reentrega

- CSS: aplicación de media queries en la página users, corrigiendo que la barra de búsqueda se superponga con los resultados y haciéndola responsiva a diferentes resoluciones. También se ha corregido la barra de navegación: el título ya no se monta sobre los iconos. Además, se ha añadido a dichos iconos que cambien de color en la página activa para mejor experiencia de usuario (/Frontend/src/Components/navbar/UseIsActive.js).
- Búsqueda de usuarios: se ha actualizado la funcionalidad de la barra de búsqueda de manera que no filtre únicamente por coincidencia exacta sino por string clave, y se han ampliado los filtros a nombre, apellido y email. Aprovechamos para limpiar una parte del código de esta vista, y se tomó la decisión de mantener la búsqueda con filtro a través de su propio endpoint.
- Seguridad: creación de middleware authChecker (/Backend/utils), aplicado a todas las rutas (menos login y registro) para mejorar la seguridad a través de jwt. En /Frontend/utils se han añadido dos nuevas funciones reutilizables más específicas para cada caso, según la necesidad de jwt en los headers o no, y se han aplicado a todas las peticiones del proyecto.


## Ticket: admin

### Base de datos:

En la tabla "user" se ha añadido una columna "role", que puede ser "admin" o "user". Al registrar un usuario nuevo por defecto recibirá el rol "user".

Los usuarios con permisos de administrador son:
 ID 1: Lucía lucia@gmail.com ,
 ID 2: Adrián pagemaster92@gmail.com,
 ID 3: Stella 	Stella@hotmail.com,
 y la contraseña en todos los casos es 123

### Frontend:

Esta funcionalidad se encuentra en /Frontend/src/Components/navbar/OpenTable.js

Al hacer el login guardamos en el localStorage el rol del usuario. Si éste es "admin", en la barra de navegación aparecerá un nuevo icono "Tabla usuarios", que nos mostrará un modal con una tabla paginada que trae los datos personales de todos los usuarios registrados de la base de datos. Los usuarios con el rol "user" no tienen acceso a esta funcionalidad.

El botón "imprimir" descargará un archivo en formato .xlsx de dicho listado de usuarios.
La generación del archivo viene a través de las librerías "xlsx" en el frontend y "exceljs" en el backend.








 


