Autor: Ing. Martin Acosta - 2020
# Proyecto Final DAM
## Introducción 🚀
El siguiente repositorio es la presentación del trabajo final de la asignatura Desarrollo de Aplicaciones Multiplataforma, para la Carrera de Especialización en Internet de las Cosas de la Facultad de Ingeniería de la Universidad de Buenos Aires (CEIoT - FIUBA).
## Descripción 📋
El proyecto es un prototipo de dashboard para el control sobre un sistema de riego en distintos ambientes de una casa, pudiendo realizar la lectura de sensores y accionar electroválvulas. También cuenta con un log de lecturas y accionamientos.
## Captura de la aplicación 📸
![alt text](https://i.ibb.co/gJDVbJ4/screencast2.gif)
## Correr la aplicación ▶️
Para correr la aplicación deberá clonar o descargar el repositorio e ingresar a la carpeta del proyecto:
```sh
git clone https://github.com/javosmar/dam_tp_final.git
cd dam_tp_final/API
./servicios.sh
cd ../proyectoDam
npm install && npm run start
```
Para ejecutar la API, ingresar a la carpeta correspondiente y lanzar el script que levanta los servicios necesarios
```sh
cd API
./servicios.sh
```
Una vez que la API esté corriendo correctamente, desde otra terminal proceder a levantar la aplicación de Ionic
```sh
cd proyectoDam
npm install
npm run start
```
## Terminar la ejecución ⏹
Para detener la aplicación, se deberá terminar la ejecución de los contenedores mediante el siguiente comando:
```sh
docker stop nodejs-container phpadmin mysql-server
```
## Construido con 🛠️
* [Ionic](https://ionicframework.com/)
* [NodeJS](https://nodejs.org/)
## Contribuir 🖇️
Para contribuir realizar un pull request con las sugerencias.
## Licencia 📄
GPL