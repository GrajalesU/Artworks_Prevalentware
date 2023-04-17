
# Prueba técnica para Prevalentware

## Enunciado

**Contexto:**

Uno de los clientes de Prevalentware, desea crear una solución que le permita explorar las obras de arte disponibles en varios museos del mundo, empezando por el  [Rijksmuseum](https://www.rijksmuseum.nl/en "https://www.rijksmuseum.nl/en")  , el museo nacional de los Países Bajos.

Para ello, se debe crear una aplicación que se conecte con el  [API](https://data.rijksmuseum.nl/object-metadata/api/ "https://data.rijksmuseum.nl/object-metadata/api/")  público del museo para acceder a la información de las obras disponibles y poder guardar las obras favoritas en una base de datos propia.

**Requerimientos:**

La aplicación debe contar, cómo mínimo, con las siguientes pantallas:

-   Pantalla de login: ( el usuario y contraseña pueden estar “hardcoded”, no es necesario crear un flujo de registro para este proyecto).

-   Pantalla de búsqueda de obras de arte: en esta pantalla, un usuario autenticado, debe poder buscar obras de arte usando el título de la obra o nombre del artista, para ello debe haber un input de texto para el título de la obra y un campo de selector con autocompletado que permita buscar entre los artistas disponibles. Luego de realizar la búsqueda, se presentarán en la pantalla las obras encontradas que contengan imágenes, junto a su título, nombre del artista, la imagen de la obra y un link a la obra en el sitio del Rijksmuseum.

- El usuario deberá poder seleccionar sus obras favoritas del resultado, y estas deberán ser guardadas en una base de datos propia de la aplicación. Si la obra ya había sido guardada, se debe mostrar un mensaje de error informando al usuario que se trata de un duplicado.

  -   **Tips**: para obtener los artistas disponibles puedes usar este web service público del museo, que devuelve la lista de artistas:

      [https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q=](https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q= "https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q=")

En este  [ejemplo](https://react-select.com/async "https://react-select.com/async")  puede encontrar una implementación de un selector con opciones cargadas de manera asíncrona

-   Pantalla de perfil, que contenga la información básica del usuario ( nombre y correo), junto a una lista de las obras guardadas por el usuario ( esta información debe venir de la base de datos de la aplicación, no del API público del museo) .

## Despliegue

Pagina del proyecto: [Artscope](https://artworks-prevalentware.vercel.app/login)  
 
- */login* : Esta cuenta con un Login para ingresar a su cuenta. 
- */signUp* :Una vista para crear su cuenta.
- */* : La página principal donde puede buscar y encontrar las distintas obras de arte.
- */favorites* : La página para ver las obras guardadas en favoritos.

Cuando crees tu cuenta, esta no te pedirá campo de contraseña, este campo no fue tomado en cuenta en el desarrollo del proyecto, una vez crees tu cuenta, puedes acceder a ella usando la contraseña por defecto **artworkLover** .

Todo el despliegue ha sido con servicios gratuitos, por ende, la capacidad de estos servidores es limitada, usted puede hacer uso de todos los servicios anteriormente mencionados pero tenga en cuenta que tardará un par de segundos cada acción que requiera un llamado a la API y a la BD.

La base de datos fue desplegada en AlwaysData.
El Front y el Back fueron desplegados en Vercel.

## Objetivos cumplidos

-   Pantalla de Login
-   Pantalla de búsqueda de obras de arte
-   El usuario deberá poder seleccionar sus obras favoritas del resultado, y estas deberán ser guardadas en una base de datos propia de la aplicación.
-   Pantalla de perfil, que contenga la información básica del usuario ( nombre y correo), junto a una lista de las obras guardadas por el usuario ( esta información debe venir de la base de datos de la aplicación, no del API público del museo) .

## Dificultades

No logré obtener el listado de los artistas dado que el servidor me arrojaba un problema de CORS, procedí a desplegar la aplicación para ver si de alguna forma tenía que ver con el servidor de desarrollo, al ver que tampoco se arreglaba este una vez desplegado, decidí hacer un llamado a este servicio y almacenar en una lista los resultados obtenidos, el problema es que no se encuentran todos los artistas.

Dejo evidencia de esto en la carpeta ***/statement/evidence***.

Además, por temas de tiempo, no pude realizar la funcionalidad de autenticación por medio de contraseñas personalizadas o por medio de oAuth, pero esta puede servir para ser desarrollada en algún trabajo futuro, dado el caso que se siga este proyecto.


## Logros

Construí un sistema que permite crear y autenticar usuarios, permite ver obras de arte, filtrarlas por su nombre y por artista, permite agregar las obras a favoritos y permite estas mismas en un apartado especial.

## Logros técnicos

Frontend:

-   Pagina de busqueda.
-   Filtrado.
-   Login.
-  Creación de cuenta.
-   Gestión de favoritos.
-   Rutas privadas.

Backend:

-   Conexión a base de datos PostgreSQL
-   Creación de modelos simples de cada entidad del sistema (usuario, obra de arte y favorito)
- Uso de Prisma para la creación de la base de datos y a su vez para el servicio de ORM para facilitar la comunicación con la base de datos.
-   Creación de endpoints para permitir ser consumido por el Frontend Esto traduce a una API funcional del sistema.

Infraestructura:

-   Base de datos en hosting AlwaysData
-   Backend y Frontend en Vercel.
