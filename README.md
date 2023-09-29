# Proyecto presupuesto 

### Contenido 


- [Descripción del proyecto](#descripción-del-proyecto)

- [Metodo de uso](#metodo-de-uso)
  
- [Funcionalidades](#funcionalidades)

- [API utilizada](#api)

- [Estructura del Proyecto](#estructura-del-proyecto)

### Descripción del proyecto

- Esta es una aplicación web simple para gestionar un presupuesto. Puedes agregar ingresos y egresos, editarlos y eliminarlos utilizando una API mock. La aplicación está construida utilizando HTML, CSS y JavaScript.

## Metodo de uso

1. Clona este repositorio en tu máquina local.

2. Abre el archivo `index.html` en tu navegador web.

3. Verás una interfaz de usuario que te permite agregar ingresos y egresos, editarlos y eliminarlos.

## Funcionalidades

:heavy_check_mark: `Ingreso:` Llena el formulario en la parte superior de la página para agregar ingresos o egresos. Ingresa el valor y selecciona el tipo (Ingreso o Egreso) y luego haz clic en "Enviar".

:heavy_check_mark: `Egreso:` Para editar un dato existente, haz clic en el botón "Editar" junto al dato que deseas editar. Se abrirá un cuadro de diálogo que te permite editar el valor y el tipo. Luego, haz clic en "Enviar" para guardar los cambios.

:heavy_check_mark: `Editar:` Para editar un dato existente, haz clic en el botón "Editar" junto al dato que deseas editar. Se abrirá un cuadro de diálogo que te permite editar el valor y el tipo. Luego, haz clic en "Enviar" para guardar los cambios.

:heavy_check_mark: `Borrar:` Para eliminar un dato existente, haz clic en el botón "Eliminar" junto al dato que deseas eliminar.

:heavy_check_mark: `Visualización de Datos:` Todos los datos ingresados se muestran en una tabla en la parte inferior de la página. Puedes ver el ID, el valor y el tipo de cada dato.

## API

Se utilizo Json server, donde ya no se utiliza un creador de api, busca la informacion en `dv.json` y actualiza los datos de la pagina.

## Estructura del Proyecto

- La carpeta `Modulos` contiene el `src` para proxima modularizacion.
- El archivo HTML `index.html` representan la pagina principal donde se encuentra el programa.
- El archivo `main.js` contiene el funcionamiento del programa.
- El archivo `style.css` por ahora no se a agregado ningun estilo, asi que no tiene ningun funcionamiento del programa por ahora.
