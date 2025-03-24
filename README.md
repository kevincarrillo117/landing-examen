# 🚀 Landing Examen

**Landing Examen** es un proyecto creado con **Laravel 12**, **React con Inertia.js**, y **Tailwind CSS**, proporcionando un entorno moderno para el desarrollo web.

## 📋 Requisitos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

- **PHP 8.2 o superior**
- **Composer** (gestor de dependencias de PHP)
- **Node.js** (recomendado: v18 o superior)
- **NPM** o **Yarn** (gestor de paquetes de JavaScript)
- **Warp Terminal** (opcional, pero recomendado si sigues estos pasos)

---

## ⚙️ Instalación

Sigue estos pasos para instalar el proyecto en tu entorno local:

### 1️⃣ Instalar Laravel Installer
Si no tienes el instalador de Laravel, instálalo con Composer:
```bash
composer global require laravel/installer
```

Asegúrate de que el binario de Laravel está en tu **$PATH** ejecutando:
```bash
laravel --version
```

### 2️⃣ Crear el proyecto con Laravel Breeze y React

Ejecuta el siguiente comando en Warp Terminal:
```bash
laravel new landing-examen
```
Esto creará una nueva aplicación de Laravel. Luego, selecciona las siguientes opciones cuando se te solicite:

- **Starter Kit:** Laravel Breeze
- **Stack:** React con Inertia
- **Opciones adicionales:** Ninguna
- **Framework de pruebas:** PHPUnit
- **Inicializar repositorio Git:** No

###  Ingresar al directorio del proyecto
```bash
cd landing-examen
```

###  Ejecutar el servidor de desarrollo
Inicia el servidor de Laravel:
```bash
php artisan serve
```

Ejecuta el servidor de React con Vite:
```bash
npm run dev
```

---

## 🚀 Uso del Proyecto

1. Abre el navegador y accede a: `http://127.0.0.1:8000`
2. El frontend está basado en React con Inertia.js y usa Tailwind CSS para estilos.
3. Puedes comenzar a desarrollar en los archivos dentro de `resources/js` para React y `resources/views` para las vistas de Laravel.

---

## 🛠️ Comandos Útiles

- **Ejecutar Laravel**:
  ```bash
  php artisan serve
  ```
- **Ejecutar React con Vite**:
  ```bash
  npm run dev
  ```
- **Compilar para producción**:
  ```bash
  npm run build
  ```
- **Ejecutar migraciones nuevamente**:
  ```bash
  php artisan migrate:fresh --seed
  ```

---


