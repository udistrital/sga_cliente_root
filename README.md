# Cómo configurar el tema
Para configurar el tema en la infraestructura de microclientes, es necesario ajustar:

1. Consumo de los assets
2. Consumo de la paleta de colores
3. Favicon

## 1. Consumo de los assets

Para poder configurar el consumo de los assets, se tiene que modificar la variable de entorno que se ubica en el root llamada `appname`, en este caso, está configurada con el valor de `"sga"`.

![image](https://github.com/udistrital/sga_documentacion/assets/25818945/49bccaae-332a-40ed-825f-fd202100c9f3)

Estas variables de entorno se envían como props al microfrontend `core`.

![image](https://github.com/udistrital/sga_documentacion/assets/25818945/c1c5914b-10c0-4d73-bf55-4bc6b648366b)

El `core` recibe las variables de entorno del root y hace uso de la variable `appname` para realizar consultas al servicio de assets de acuerdo con el valor del app name. Veamos un ejemplo:
- Si `appname="sga"`
![image](https://github.com/udistrital/sga_documentacion/assets/25818945/aff30eaf-7183-4bfe-ba61-37c53025cbdd)

- Si `appname="polux"`
![image](https://github.com/udistrital/sga_documentacion/assets/25818945/fb5eae15-67b2-40f1-9e55-07795edca50a)

## 2. Consumo de la paleta de colores

El consumo de la paleta de colores se hace desde el microfrontend `core` al servicio de assets.

Para configurar diferentes paletas de colores, se tiene que modificar el `@import url("paleta-de-colores")` que se encuentra en `/src/styles.scss`.

![image](https://github.com/udistrital/sga_documentacion/assets/25818945/80e70e4d-e3e8-4da6-8b9f-36c90d488043)

Si se observa la imagen, se realiza la importación de un archivo css, el cual contiene la [paleta de colores](https://pruebasassets.portaloas.udistrital.edu.co/urano-style.css). Se puede cambiar la url para que consuma otra paleta de colores o realizar una nueva, agregarla al repositorio de `assets` y redesplegar el servicio para poder consumir la nueva paleta de colores.

## 3. Favicon
Para cambiar el favicon de la aplicación:
![image](https://github.com/udistrital/sga_documentacion/assets/25818945/98a46250-2a3f-4df3-ba3a-7fd06b0c1dc3)

Es necesario modificar el `favicon.ico` que se encuentra en el `root`. Aunque cada microfrontend tiene un favicon, el único que se tiene en cuenta para la aplicación es el del `root`.
![image](https://github.com/udistrital/sga_documentacion/assets/25818945/5552bd4b-6b8e-4a87-8385-e46374a9b820)
