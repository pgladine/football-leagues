# FOOTBALL LEAGUES
Esta web te muestra un listado de ligas y copas de fútbol. De cada una puedes consultar su clasificación y sus resultados por jornada. Haz click en cada tarjeta según lo que quieras ver y vuelve a la página principal pinchando en 
La web se conecta a una API externa gratuita en la que deberás registrate para obtener un API Token que te permita ver la información de la web. 

## Setup
---

- Clona el reposito
- Instala las dependencias necesarias:

  ```bash
  cd football-leagues
  npm i
  ```
- Regístrate en esta [web](https://www.football-data.org) y obten tu API Token

- Crea en la raíz del proyecto un archivo `.env` (utilizando la plantilla `.env-template`) e introduce ahí el API Token 

- Levanta el servidor:

  ```bash
  npm run dev
  ```
- Abre la web poniendo en el navegador `http://localhost:5173/`
- Para correr los test:
  ```
  npm run test
  ```
---
## Comentarios

❗Ten en que la API no permite hacer más de 10 llamadas por minuto, por lo que, si tratas de navegar muy seguido sobre los elementos puede mostrarte un mensaje de error.
