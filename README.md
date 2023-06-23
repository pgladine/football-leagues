# FOOTBALL LEAGUES
Esta web te muestra un listado de ligas y copas de fútbol. De cada una puedes consultar su clasificación y sus resultados por jornada. Haz click en cada tarjeta según lo que quieras ver y vuelve a la página principal pinchando en **Competiciones**.

La web se conecta a una API externa gratuita en la que deberás registrate para obtener un API Token que te permita ver la información de la web. 

## Setup

1.  Clona el repositorio
2. Instala las dependencias necesarias:

    ```bash
    cd football-leagues
    npm i
    ```
3.   Regístrate en esta [web](https://www.football-data.org) y obten tu API Token

4.  Crea en la raíz del proyecto un archivo `.env` (utilizando la plantilla `.env-template`) e introduce ahí el API Token 

5.  Levanta el servidor:

    ```bash
    npm run dev
    ```
6.  Abre la web poniendo en el navegador `http://localhost:5173/`

## TEST

 Para correr los test:

  ```bash
  npm run test
  ```

## Comentarios

❗Ten en que la API no permite hacer más de 10 llamadas por minuto, por lo que, si tratas de navegar muy seguido sobre los elementos puede mostrarte un mensaje de error.
