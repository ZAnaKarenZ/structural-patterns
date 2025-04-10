# Structural Patterns
Versión en español: https://github.com/ZAnaKarenZ/structural-patterns/blob/main/README.es.md

Software architecture class exercise for understanding Decorator and Proxy patterns.

Reference: Refactoring.Guru. (n. d.). Structural design patterns. https://refactoring.guru/design-patterns/structural-patterns

## Decorator
It allows you to add new behaviors to objects by wrapping them inside other objects containing such behaviors. 

Composition is used instead of inheritance, which allows an object to delegate tasks to another object instead of executing them on its own. Additionally, the object can change which object it delegates tasks to, allowing different behaviours in runtime.


## Proxy
A placeholder for the original object is created, which controls access to said original object. This allows execution of an action before ot after the original object recieves the message.

This pattern relies on composition as well, in which the Proxy object creates and delegates tasks to the real object.

### ¿Cuál es la principal diferencia entre el patrón Decorator y el patrón Proxy?

Composition is used in both patterns in order to delegate tasks. However, the patterns have completely different functionalities from one another:

Proxy works as a placeholder of a real object. The client interacts directly with the Proxy object, but not with the real one. The Proxy manages the life cicle of the real object and delegates client requests to it.

Decorator does not substitue another object. Instead its function is the addition of new behaviours. In order to add multiple functionalities to an object, multiple decorators can be added. Moreover, decorators are managed directly by the client. 

### ¿En qué tipo de escenarios usarías cada uno?

I would use Proxy for objects that needed to be initialized in runtime, specially those that would otherwise consume plenty of resources. I would also use it for security reasons, allowing the client to interact solely with the Proxy object. The Proxy would allow access only to certain methods or to clients with specific credentials. I could also use it to access an object remotely.

Concrete examples could include database or bank account access management.

I would use Decorator in case I need to add multiple functionalities to an already existing object. Specially if I know multiple combinations of functionalities are allowed.

A concrete example where I have used this pattern is during web page creation. Decorators can wrap a page in order to add specific functionalities or global variables.