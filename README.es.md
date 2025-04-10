# Structural Patterns / Patrones Estructurales

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/ZAnaKarenZ/structural-patterns/blob/main/README.md)

Ejercicio de la clase de arquitectura de software para entender los patrones Proxy y Decorator. 

Referencia: https://refactoring.guru/design-patterns/structural-patterns

## Decorator
Permite agregar nuevos comportamientos a objetos, envolviéndolos dentro de otros objetos que contienen esos comportamientos.

Utiliza relaciones de composición en vez de herencia, lo que permite a un objeto delegar tareas en vez de realizarlas por su cuenta. El objeto puede elegir delegar tareas a diferentes clases, lo que le permite tener diferentes comportamientos en tiempo de ejecución.

## Proxy
Permite tener un substituto para otro objeto, buscando controlar el acceso al objeto original. De esta manera, puedes realizar una acción antes o después de que el objeto original reciba el mensaje.

También utiliza relaciones de compisición, donde el objeto Proxy crea un objeto real y le delega todas las tareas.

### ¿Cuál es la principal diferencia entre el patrón Decorator y el patrón Proxy?
Si bien ambos son patrones que utilizan relaciones de composición, la intención con la que se utiliza cada uno es completamente distinta. Proxy funciona como sustituto del objeto original, de manera que puedes intera
Por otra parte, decorator busca añadir comportamientos a una clase 

¿En qué tipo de escenarios usarías cada uno?

Utilizaría Proxy para inicializar objetos en tiempo de ejecución, para evitar que consuman muchos recursos. Lo utilizaría por razones de seguridad, permitiendo acceso solamente a ciertos métodos o solamente a usuarios que tengan las credenciales correctas. Finalmente, también lo utilizaría para acceder a un objeto de manera remota.

Utilizaría Decorator para decorar 