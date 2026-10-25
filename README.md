# Ruta's Chickens - Aplicacion Móvil

## Descripción

Aplicación móvil desarrollada para la pollería Ruta's Chickens, que permite a los clientes registrar solicitudes relacionadas con pedidos, consultas y reclamos.

## Funcionalidades

- Inicio de sesión con validación de campos.
- Pantalla principal con mensaje de bienvenida.
- Registro de solicitudes de clientes.
- Validación de formularios.
- Listado de solicitudes registradas.
- Navegación entre pantallas.

## Tecnologías utilizadas

- React Native
- Expo SDK 58
- TypeScript
- Expo Router
- React Hooks (useState, useEffect)
- Context API y useReducer
- StyleSheet
- FlatList

## Requisitos

- Node.js y npm
- Visual Studio Code
- Expo Go compatible con el SDK del proyecto, o un emulador compatible

## Instalación y ejecución

1. Clonar el repositorio:

   git clone URL_DEL_REPOSITORIO

2. Ingresar a la carpeta:

   cd rutas-chickens

3. Instalar las dependencias:

   npm install

4. Iniciar la aplicación:

   npx expo start

5. Abrir la aplicación desde Expo Go o un emulador compatible.

## Credenciales de prueba

Usuario: andre
Contraseña: 123456

Nota: El inicio de sesión es demostrativo y solamente valida que los campos estén completos.

## Consideraciones

Las solicitudes se almacenan temporalmente en memoria mediante Context API y useReducer.

Al reiniciar completamente la aplicación, los registros pueden perderse.

Esta versión corresponde al desarrollo inicial del proyecto.
