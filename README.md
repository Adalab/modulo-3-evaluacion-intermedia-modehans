# React-Starter-kit

## Conclusiones

Para instalar create-react-app usa sudo npm install -g create-react-app. Lo tendrás que hacer una sola vez en cada ordenador.
Cada vez que quieras crear un nuevo proyecto de React:
Ejecuta create-react-app nombre-de-la-carpeta-del-proyecto
Abre VS Code en la carpeta creada.
Ejecuta npm start para arrancar el proyecto en http://localhost:3000.

## Conclusiones

Para añadir estilos CSS en React hay que:
Importar el fichero de estilos en las primeras líneas del componente src/components/App.js con la línea import '../styles/nombre-del-fichero.css';
Añadir las clases CSS a tus etiquetas HTML con el atributo className.

## Conclusiones

Para añadir estilos Sass en React hay que:
Instalar en el proyecto Sass con npm install node-sass.
Importar el fichero de Sass en las primeras líneas del componente src/components/App.js con la línea import '../styles/nombre-de-fichero.scss';
Añadir las clases CSS a tus etiquetas HTML con el atributo className.

## Conclusiones

Para usar imágenes de nuestro proyecto y que React nos ayude a gestionarlas tenemos que:
Importar la imagen con import logo from '../images/logo.jpg';.
Usar la imagen donde queramos con <img src={logo} title="Adalab" alt="Logo de Adalab" />.
Usar llaves en vez de comillas en el atributo src={logo}.
Para usar imágenes de Internet y que React no las gestione tenemos que:
Usar la imagen con comillas en el atributo src como por ejemplo:
<img
  src="https://dominio.com/ruta-de-la-imagen.jpg"
  title="Página de Adalab"
  alt="Logo de Adalab"
/>
Todas las etiquetas de imagen deben estar cerradas o auto cerradas.

## Errores más comunes al escribir HTML en React

Los errores más comunes son:
Que al escribir una clase de CSS hemos puesto class en vez de className.
Que una etiqueta no esté cerrada:
Recordemos que React obliga a que todas las etiquetas tengan su apertura y su cierre. Las etiquetas que no pueden tener hijas como <input />, <img /> o <br />. Las tenemos que auto cerrar.
Que una etiqueta esté cerrada donde no corresponde

## Comentarios de código en el HTML de React

Como todo lenguaje de programación nos interesa poner comentarios de código en nuestros componentes de React.
Ya sabes que en HTML son <!-- comentario --> y en JS son // comentario de una línea o /_ comentario de varias líneas _/.
Cuando queremos comentar las etiquetas HTML en React debemos utilizar la sintaxis: { /_ comentario para una o varias líneas _/}.

## Migrar el código Sass

En lecciones anteriores hemos aprendido a usar Sass en un proyecto de React. Vamos a recordar los pasos:
Instala Sass con npm install node-sass.
Crea tu fichero o ficheros Sass en src/styles.
Importa tu fichero o ficheros Sass en el componente App.js.
Así que te puedes imaginar lo que tienes que hacer para migrar un proyecto a React.
Crea un proyecto a partir de tu react-starter-kit y arráncalo.
Copia los ficheros Sass de tu proyecto antiguo en src/styles.
Importa uno o varios ficheros en el componente src/components/App.js con la línea:
import "../styles/nombre-de-mi-fichero.scss";
Y poco más.
Si lo has hecho todo bien, acércate a la ventana y pon mirada de orgullo. Si no, mira en la consola del DevTools los posibles errores.
Como decíamos en la mini lección de React y Sass, a React solo le importa que el fichero Sass esté bien importado. Si lo está y sigue habiendo errores, estos son errores de Sass. Así que a partir de ahí ponte la gorra de maquetadora y piensa solo en por qué tu Sass no está funcionando.

### Conclusiones

React trabaja con CSS igual que con Sass. Nos tenemos que preocupar de que el fichero de Sass esté bien importado con import '../styles/nombre-de-mi-fichero.sass';. A partir de ese momento debes pensar como una maquetadora de Sass.
