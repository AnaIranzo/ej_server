# ej_server
EJERCICIO - Server Render con Express + Pug

Crea una aplicación de películas para hacer server render con Nodejs y Pug. Para ello usa la API de pelis que te proporcionamos
- [OMDB api](http://www.omdbapi.com/)
Templates:
- `home.pug` --> Renderiza un formulario de búsqueda por título de película
- `film.pug` --> Renderiza los detalles de una película: título, autor, descripción, imagen...

Rutas:
- [GET] `http://localhost:3000` Home de la app. Se renderiza home.pug
- [GET] `http://localhost:3000/film/:title` Muestra los datos de una peli por título. Internamente se hace un fetch a la API de pelis para obtener dichos datos. Debe renderizar film.pug
- [POST] `http://localhost:3000/film/` Se envía el POST a esta ruta cuando envías el formulario de búsqueda de peli de `home.pug`. Puede ser de ayuda usar `res.redirect()`
