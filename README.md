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

## Requisitos

Por lo tanto, para levantar y ejecutar el proyecto se requiere tener instalado:

- JAVA JDK 8
- Versión reciente de Maven (probado con la versión 3.6.3)
- Versión reciente de Node (probado con la versión 19.6.0)
- IDE de desarrollo de su preferencia.

## Compilación

El proyecto se compila ejecutando los siguientes comando dentro de la ruta del proyecto:

1) npm install
2) npm run build
3) mvn clean install -U -DskipTests

# Enunciado

1) Se debe implementar nuevos endpoints en la API REST existente que permitan listar, registrar, editar y eliminar el recurso de persona
2) Se debe implementar una pantalla de listado, ingreso y edición del concepto de persona. Los atributos son:
- Nombres
- Apellido
- Pais
3) Se debe mantener la arquitectura existente, creando construcciones análogas a las ya existentes.








