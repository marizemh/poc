# Descripción del POC

En el presente repositorio se incluye una POC que implementa un listado de paises. Por simplicidad se combina backend y frontend en un mismo módulo. 

Se utilizan las siguientes tecnologías y bibliotecas:

## Backend 
- JAVA 8, Spring Boot, Mybatis, H2 (motor de base de datos)
- Gestión de dependencias utilizando Maven.

## Frontend
- Thymeleaf, 
- HTML5, CSS y ES6 
- Bootstrap (4.6) y Datatables (https://datatables.net/)
- Gestión de dependencias mediante npm

## Requisitos de instalación

Para levantar y ejecutar el proyecto se requiere tener instalado:

- JAVA JDK 8
- Versión reciente de Maven (probado con la versión 3.6.3)
- Versión reciente de Node (probado con la versión 19.6.0)
- IDE de desarrollo de su preferencia.

## Instrucciones de compilación

El proyecto se compila ejecutando los siguientes comandos dentro de la ruta del proyecto:

1) npm install (sólo la primera vez)
2) npm run build
3) mvn clean install -U -DskipTests

# Enunciado

1) Se debe implementar nuevos endpoints en la API REST existente que permitan listar, registrar, editar y eliminar el recurso de persona. Este recurso consta de los siguientes atributos y debe ser persistido en memoria a través de la BD H2 ya configurada en el proyecto.

- Nombres
- Apellido
- Pais


 
2) Se debe implementar una nueva pantalla que despliegue el listado de personas con botones y/o acciones para eliminar, crear y editar una persona
3) La solicitud de los datos de creación y edición se debe realizar en una pantalla modal.  
4) Se debe mantener la arquitectura existente, creando construcciones análogas y nuevos artefactos sólo por necesidad.
5) Se debe respetar el look & feel existente








