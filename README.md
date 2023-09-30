# Proyecto presupuesto 

### Contenido 

- [Descripción del proyecto](#descripción-del-proyecto)
- [Método de uso](#método-de-uso)
- [Funcionalidades](#funcionalidades)
- [API utilizada](#api)
- [Estructura del Proyecto](#estructura-del-proyecto)

### Descripción del proyecto

Este es un proyecto de una aplicación web simple para gestionar un presupuesto. Puedes agregar ingresos y egresos, editarlos y eliminarlos. La aplicación está construida utilizando HTML, CSS, nvm y JavaScript.

## Método de uso

1. Clona este repositorio en tu máquina local.

2. Entra a visual Studio code y ejecuta `npm init -y` en tu terminal esto inicializara tu archivo npm, despues ejecutas `npm i` y esto hara los paquetes necesarios para su funcionamiento, siguiente a esto  escribe `npm run dev` esto inicializa tu Json-Server. Si no te sirven estos comandos revisa si tienes instalado nvm con el comando `nvm -v`. Si no tienes instalado nvm descargarlo [aqui](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).

2. Abre el archivo `index.html` en tu navegador web y te saldra una pagina tal que asi.


    ![Captura desde 2023-09-29 20-39-03](https://github.com/Ancreem/proyectos-JS/assets/139159920/06923234-e13c-429c-8a53-75a35b369cce)

    Verás una interfaz de usuario que te permite agregar ingresos y egresos, editarlos y eliminarlos.
  
     Si quieres ingresar un dato a la tabla dirigete al cuadro de texto y escribe el valor que deseas, si quieres que sea un ingreso le oprimes a ![image](https://github.com/Ancreem/proyectos-JS/assets/139159920/57a4268a-893a-49cb-90c8-4ed3071887fd), si quieres que sea egreso ![image](https://github.com/Ancreem/proyectos-JS/assets/139159920/3ea8db9d-fa1c-4d9d-a981-9af9f31a60e3) y le das a ![image](https://github.com/Ancreem/proyectos-JS/assets/139159920/d730686d-bad4-436a-b897-48d762f11737). El valor que ingresaste se agregara a la tabla.
   
   ![Captura desde 2023-09-29 20-41-11](https://github.com/Ancreem/proyectos-JS/assets/139159920/73f73f63-4192-4269-9aad-49b0e1ee7b07)
   
    Si quieres eliminar un dato solo tendras que dirigir tu mouse al icono ![image](https://github.com/Ancreem/proyectos-JS/assets/139159920/fde63bc1-d2c4-49f7-b63c-d4a97cd612e9).
   
    Si quieres editar un dato oprimele al icono ![image](https://github.com/Ancreem/proyectos-JS/assets/139159920/4cef19dc-7dc0-4975-91b5-a21da5882f41)
   y te saldra una ventana emergente tal que asi.
   
      ![Captura desde 2023-09-29 21-03-54](https://github.com/Ancreem/proyectos-JS/assets/139159920/b4d487f3-09af-4176-a02b-fba14259276f)
  
    Lo editas y le das al boton de ![Captura desde 2023-09-29 21-20-27](https://github.com/Ancreem/proyectos-JS/assets/139159920/591bc4e5-6723-4198-b746-ddfd49ba6ecc)

4. tambien veras el total de ingresos, egresos y el total del presupuesto en la parte inferior de la tabla.

     ![Captura desde 2023-09-29 20-46-35](https://github.com/Ancreem/proyectos-JS/assets/139159920/38e852c7-fb30-4fcf-bf82-be99af8c37ae)


## Funcionalidades

- :heavy_check_mark: `Ingreso:` Llena el formulario en la parte superior de la página para agregar ingresos o egresos. Ingresa el valor y selecciona el tipo (Ingreso o Egreso) y luego haz clic en "Enviar".

- :heavy_check_mark: `Editar:` Para editar un dato existente, haz clic en el botón "Editar" junto al dato que deseas editar. Se abrirá un cuadro de diálogo que te permite editar el valor y el tipo. Luego, haz clic en "Enviar" para guardar los cambios.

- :heavy_check_mark: `Eliminar:` Para eliminar un dato existente, haz clic en el botón "Eliminar" junto al dato que deseas eliminar.

- :heavy_check_mark: `Visualización de Datos:` Todos los datos ingresados se muestran en una tabla en la parte inferior de la página. Puedes ver el ID, el valor y el tipo de cada dato.

- :heavy_check_mark: `Totales:` Todos los datos ingresados se le mostrara su total y se vera en la parte inferior de la tabla.

## API

Se utiliza JSON Server, donde se busca la información en `db.json` y se actualizan los datos de la página.
mira el contenido del json [aqui](http://127.0.0.12:5010/presupuestos).

## Estructura del Proyecto

- La carpeta `Modulos` contiene el `src` para futuras modularizaciones.
- El archivo HTML `index.html` representa la página principal donde se encuentra el programa.
- El archivo `main.js` contiene el funcionamiento del programa.
- El archivo `style.css` aún no contiene ningún estilo, por lo que no tiene ningún efecto en el programa por ahora.
- El archivo `package.json` contiene los paramentros del Json-Server.
- El archivo `db.json` es la que contendra la informacion que le mandes.
- El archivo `.gitignore` contiene los archivos que ignorara para los commits.
