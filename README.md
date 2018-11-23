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
cd nodo-prueba/P2/vue-test/
npm install
```

Para ejecutar la aplicación del ejercicio #02, una vez ubicado en la raiz de la carpeta debes ejecutar el siguiente comando:

```sh
npm run dev
```

Automáticamente se te abrirá en tu navegador una vista específicamente en la url "http://localhost:8080/"

Esta prueba sirve para determinar las capacidades a nivel lógicas en javascript, y las capacidades a nivel de frontend con el framework Vue JS.

## Desafíos

### 1. Logica Javascript
* En la carpeta de la prueba se encuentra una carpeta llamada "P1" donde tenemos un archivo llamado `logic-text.js`, en el encontraremos lo siguiente:

* 1 Arreglo con información de equipos de fútbol, 1 Arreglo con información de ligas de fútbol europeas, 1 arreglo asociando equipos de fútbol con las ligas donde compiten y finalmente un arreglo donde se asocian equipos de fútbol con la cantidad de victorias en la uefa champions league

* Este primer ejercicio consiste en realizar la lógica de un conjunto de funciones donde se piden cierto tipo de información que abarcan 1 2 3 o los 4 arreglos en conjunto.

### 2. Capacidades en frontend (Vue JS)
* Dentro de la carpeta "P2", encontraremos un proyecto llamado `vue-test`, en el cual existe la base de un proyecto realizado con `vue-cli (https://cli.vuejs.org/guide/)`, donde se muestra un listado de todos los personajes ficticios de la serie Game Of Thrones.

* La idea de este desafío es consultar el api publica de game of thrones `(https://api.got.show/doc/)`, donde se debe extraer el detalle de cada personaje a través de la siguiente url `(https://api.got.show/api/characters/byId/:id)` donde `":id"` es el id del personaje al cual se desea obtener la información.

* Como base ya el sistema realiza una consulta a la url `(https://api.got.show/api/characters/)`, donde se obtienen todos los personajes del api, y el cual contiene información genérica de los personajes `(donde se incluye el ":id" del personaje)`.

* El desafío consta con crear el componente para mostrar la información del detalle del personaje, este componente debe ser visualizado al accionar el botón `"ver detalle"`, encontrado en la tabla principal.

* Como bonus, si desea aplicar otros recursos del api siéntase libre de hacerlo.

* Cabe destacar que en el resto del cuerpo de este desafío se encuentran las dependencias y archivos necesarios para su funcionamiento `(leer README dentro de la carpeta)`.

* Siéntase libre de darle estilos al diseño y utilizar cualquier librería que pueda facilitarle el cumplimiento de este desafío `(por favor documentarla en el readme del proyecto)`

* Si por algún inconveniente no se maneja bien con Vue JS siéntase libre de realizar este mismo ejercicio con otro framework de su preferencia.

# LA PRUEBA NO TIENE LÍMITE DE TIEMPO, AUNQUE CUALQUIER ENTREGA POR SOBRE 1 DÍA SERÁ EVALUADA DE FORMA MÁS RIGUROSA

# ¡ÉXITO!
