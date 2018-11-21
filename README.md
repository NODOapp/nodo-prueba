# NODO - Test
Prueba Técnica de Nodo - Node.js

## Recomendaciones

* Ver todos los archivos y módulos del proyecto para familiarizarse con las rutas y puntos de edición.
* Puedes importar cualquier librería que pueda ser de ayuda para tu solución (npm, solamente en el ejercicio #02 de la prueba).
* Luego de completar un módulo de respuesta, sube tu avance en un commit con el título y/o descripción de lo realizado.
* No hay restricción de IDE.

## Requisitos

* [Node.js >= 8.9.0](https://nodejs.org/en/)

## Para comenzar

Debes hacer un fork del proyecto, para luego hacer un pull-request de tus respuestas al repositorio original.

```sh
git clone https://github.com/../nodo-prueba.git

```

Debes instalar las dependencias para el ejercicio #02:

```sh
cd nodo-test/vue-test/
npm install
```

Para ejecutar la aplicación del ejercicio #02, una vez ubicado en la raiz de la carpeta debes ejecutar el siguiente comando:

```sh
npm run dev
```

Automaticamente se te abrira en tu navegador una vista especificamente en la url "http://localhost:8080/"

# Proyecto: Grafo de Fuerzas

Esta prueba sirve para determinar las capacidades a nivel logico en javascript, y las capacidades a nivel de frontend con el framework Vue JS.

## Explicación de los desafíos

### 1. Logica Javascript
* En la carpeta raiz de la prueba se encuentra un archivo llamado `logic-text.js`, en el encontraremos lo siguiente:

* 1 Arreglo con información de equipos de fútbol, 1 Arreglo con información de ligas de fútbol europeas, 1 arreglo asociando equipos de fútbol con las ligas donde compiten y finalmente un arreglo donde se asocian equipos de fútbol con la cantidad de victorias en la uefa champions league

* Este primer ejercicio consiste en realizar la logica de un conjunto de funciones donde se piden cierto tipo de informacion que abarcan 1 2 3 o los 4 arreglos en conjunto.

### 2. Capacidades en frontend (Vue JS)
* Dentro de la carpeta `vue-test`, existe el cuerpo de un proyecto realizado con `vue-cli (https://cli.vuejs.org/guide/)`, donde se muestra un listado de todos los personajes ficticios de la serie Game Of Thrones.

* La idea de este desafio es consultar el api publica de game of thrones `(https://api.got.show/doc/)`, donde se debe extraer el detalle de cada personaje a traves de la siguiente url `(https://api.got.show/api/characters/byId/:id)` donde `":id"` es el id del personaje al cual se desea obtener la informacion.

* Como base ya el sistema realiza una consulta a la url `(https://api.got.show/api/characters/)`, donde se obtienen todos los personajes del api, y el cual contiene informacion generica de los personajes `(donde se incluye el ":id" del personaje)`.

* El desafio consta con crear el componete para mostrar la informacion del detalle del personaje, este componente debe ser visualizado al accionar el boton `"ver detalle"`, encontrado en la tabla principal.

* Cabe destacar que en el resto del cuerpo de este desafio se encuentran las dependencias y archivos necesarios para su funcionamiento `(leer README dentro de la carpeta)`.

* Sientase libre de darle estilos y utilizar cualquier libreria que pueda facilitarle el cumplimiento de este desafio `(por favor documentarla en el readme del proyecto)`

* Si por algun inconveniente no se maneja bien con Vue JS sientase libre de realizar este mismo ejercicio con otro framework de su preferencia.
