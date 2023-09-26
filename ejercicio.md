### Spacex-data

[API V3](https://docs.spacexdata.com/)

[API V4](https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs)

- **Launches:** El endpoint `/launches` devuelve un listado de lanzamientos, cada uno de los cuales tiene una propiedad `links` que contiene un enlace a una imagen de la misión.
- **Rockets:** El endpoint `/rockets` devuelve un listado de cohetes, cada uno de los cuales tiene una propiedad `images` que contiene un array de imágenes del cohete.
- **Cores:** El endpoint `/cores` devuelve un listado de núcleos de cohetes, cada uno de los cuales tiene una propiedad `images` que contiene un array de imágenes del núcleo.
- **Ships:** El endpoint `/ships` devuelve un listado de naves espaciales, cada una de las cuales tiene una propiedad `images` que contiene un array de imágenes de la nave.
- **Capsules:** El endpoint `/capsules` devuelve un listado de cápsulas, cada una de las cuales tiene una propiedad `images` que contiene un array de imágenes de la cápsula.

Para obtener una imagen específica, se puede usar el siguiente formato de URL:

```
https://docs.spacexdata.com/api/v3/[endpoint]/[id]/image
```

Por ejemplo, para obtener la imagen del lanzamiento número 100, se puede usar la siguiente URL:

```
https://docs.spacexdata.com/api/v3/launches/100/image
```

Esta URL devolverá una imagen en formato JPEG.

- **Launches:** El endpoint `/launches` devuelve un listado de lanzamientos, cada uno de los cuales tiene una propiedad `crew` que contiene un array de objetos con los datos de los tripulantes. Cada objeto de tripulación tiene las siguientes propiedades:
  - `name`: El nombre del tripulante.
  - `role`: El rol del tripulante en la misión.
  - `agency`: La agencia espacial a la que pertenece el tripulante.
- **CrewedFlights:** El endpoint `/crewed_flights` devuelve un listado de misiones tripuladas, cada una de las cuales tiene una propiedad `crew` que contiene un array de objetos con los datos de los tripulantes. Cada objeto de tripulación tiene las mismas propiedades que en el endpoint `/launches`.

Para obtener los nombres de los tripulantes de una misión específica, se puede usar el siguiente formato de URL:

```
https://docs.spacexdata.com/api/v3/[endpoint]/[id]/crew
```

Por ejemplo, para obtener los nombres de los tripulantes del lanzamiento número 100, se puede usar la siguiente URL:

```
https://docs.spacexdata.com/api/v3/launches/100/crew
```

Esta URL devolverá un array de objetos con los datos de los tripulantes.

Según el API docs.spacexdata.com, el endpoint `/launches` tiene la descripción importante de cada misión. Este endpoint devuelve un listado de lanzamientos, cada uno de los cuales tiene una propiedad `details` que contiene un objeto con información adicional sobre la misión. La propiedad `details` tiene una propiedad `description` que contiene una descripción importante de la misión.

Para obtener la descripción importante de una misión específica, se puede usar el siguiente formato de URL:

```
https://docs.spacexdata.com/api/v3/launches/[id]/details
```

Por ejemplo, para obtener la descripción importante del lanzamiento número 100, se puede usar la siguiente URL:

```
https://docs.spacexdata.com/api/v3/launches/100/details
```

Esta URL devolverá un objeto con la información adicional sobre la misión, incluida la descripción importante.






https://www.youtube.com/watch?v=VOd-IgDQuGw&ab_channel=divcode

https://www.youtube.com/watch?v=hYv6BM2fWd8&ab_channel=webdecoded


https://www.youtube.com/watch?v=z4PVKtHeQmY&ab_channel=Mr.WebDesigner

https://www.youtube.com/watch?v=00Ak_raFngc&ab_channel=AnimationCoding