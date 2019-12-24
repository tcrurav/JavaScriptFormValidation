# Validación de un formulario en JavaScript

Ejemplo sencillo de un formulario en JavaScript sin usar ningún framework ni librería.

## ¿Por qué validar un formulario con JavaScript?

Hoy en día se suele trabajar con algún framework o librería de JavaScript como Angular, React o Vue. Nosotros lo haremos aquí de forma básica con JavaScript. Hacerlo así tiene sobre todo un valor didáctico muy interesante para comprender los fundamentos.

## ¿Cómo funciona HTTP?

Cuando hacemos una petición a un servidor web, éste nos responde con la página web solicitada.

![alt text](https://github.com/tcrurav/JavaScriptFormValidation/blob/master/screenshots/http.gif)

Cuando un usuario rellena un formulario HTML, al hacer click en el botón de "submit" lo que hace es enviar toda esa información al servidor web. 

## Pasos en la creación de un formulario HTML

* PASO 1: Usaremos Bootstrap 4. Colocarlo en el "head".
* PASO 2: Enteder para qué sirve el atributo "action" de un formulario HTML.
* PASO 3: Programar con nombres en inglés. Documentar en inglés. Hoy en día los equipos de trabajo son muchas veces multinacionales.
* PASO 4: los nombres deben ser claros. Y deben dar información sobre lo que son.
* PASO 5: Respetar las convenciones de Notación: "CamelCase" para JavaScript, "hyphen" para los estilos y "underscore" para los nombres de los ficheros.
* PASO 6: Crear controles con sus etiquetas relacionadas.
* PASO 7: El botón de "submit".
* PASO 8: Entender el formato de la información que viaja en la petición GET.
* PASO 9: Colocar el fichero de estilos en el "head". Usar siempre estilos en ficheros externos.


## Pasos en la validación de un formulario HTML usando JavaScript sin frameworks ni librerías.

* PASO 1: Poner los scripts en "head".
* PASO 2: Usar el evento "onload".
* PASO 3: Escuchar el evento "submit" para validar el documento.
* PASO 4: ¿Usar "var" o "let" o "const"?
* PASO 5: El parámetro "event" que llega a la función que gestiona el evento.
* PASO 6: El atributo "target" del evento.
* PASO 7: El ámbito(o scope) de una variable.
* PASO 8: Comprobar una condición en JavaScript. Uso de operadores ! y ||
* PASO 9: El método preventDefault() de un evento.
* PASO 10: La consola de depuración.
* PASO 11: Mostrar errores en la página para avisar al usuario. No usar "alerts".
* PASO 12: Cambiar estilos desde JavaScript.
* PASO 13: Validar la contraseña desde JavaScript.


### Requisitos

Lo más importante es tener tiempo... y...
* Un editor como Visual Studio Code.
* Conocimientos básicos de HTML, CSS, JavaScript y Bootstrap.
* Más horas de las que podrías pensar en un principio...

## Hecho con...

* [Visual Studio Code](https://code.visualstudio.com/) - El editor usado en este proyecto.

## Reconocimientos

* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. Una plantilla muy completa para crear ficheros README.md
