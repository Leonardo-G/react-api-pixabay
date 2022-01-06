# Buscador de Imágenes

Aplicación donde podemos realizar una busqueda de imágenes y obtener resultados con la palabra clave buscada. Petición realizada a la API de [Api Pixabay](https://pixabay.com/api/docs/). Sitio hecho con [React.js](https://es.reactjs.org/)

Podés visital el [deploy de la aplicación](https://zealous-hugle-840261.netlify.app/)

### Instalación

Si querés correrlo en tu entorno local, podés clonar o descargar los archivos del repositorio. Una vez instalado necesitas instalar las dependencias del proyecto. Lo haremos en la terminal del VSC colocando:

```
npm install
```

Ahora antes de correr la aplicación se necesita tener la clave o API KEY del sitio de Pixabay. Se necesita registrar para obtener dicha clave. Una vez obtenido la clave, en el archivo .ENV.EXAMPLE, remplazamos el texto por tu api key quedando así:

```
REACT_APP_API_KEY="tu api key"
```

Luego ya reemplazado por la clave, colocamos en la terminal:

```
npm start
```

Y ya estará corriendo la aplicación.

### Herramientas

 - react: El framework más popular para la interfaz del usuario, usando create-react-app. Versión 17.0.2


