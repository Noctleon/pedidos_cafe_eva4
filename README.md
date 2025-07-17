# Sistema de Pedidos de Café - Proyecto en Vite + React

## Descripción de la Problemática

En muchas pequeñas cafeterías de la región del Biobío, el proceso de toma de pedidos se realiza manualmente o por WhatsApp, lo cual genera problemas como:

- Errores humanos en los pedidos.
- Pérdida de datos al no contar con un registro persistente.
- Dificultad para coordinar horarios de entrega.
- Ausencia de un sistema que permita visualizar reservas de forma organizada.

Estas limitaciones afectan tanto a los clientes como al negocio, reduciendo la eficiencia operativa y la calidad del servicio.

## Solución Propuesta

Se propone una aplicación SPA (Single Page Application) desarrollada con **React** que permita a los trabajadores registrar pedidos de café, indicando la informacion indicada por el cliente:

- Nombre del cliente
- Tipo de café
- Cantidad
- Hora de recogida
- Notas adicionales (opcional)

La aplicación permite:

- Visualizar las reservas actuales.
- Eliminar o marcar una reserva como entregada.
- Persistencia de datos mediante **localStorage**, asegurando que la información se mantenga al actualizar o cerrar la página.
- Integración con APIs (como "random dog") para mostrar contenido adicional.

## Tecnologías utilizadas

- React + Vite
- JavaScript
- CSS personalizado
- APIs externas ([https://dog.ceo/dog-api](https://dog.ceo/dog-api)) y Hora Actual.

## 📁 Estructura del proyecto

```
pedidos-cafe/
├── public/
├── src/
│   ├── components/
│   │   ├── ReservaForm.jsx
│   │   ├── ReservaList.jsx
│   │   ├── HoraActual.jsx
│   │   └── PerroRamdom.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── README.md
└── package.json
```

## Instrucciones de uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/Noctleon/pedidos-cafe.git
cd gestion_pedidos
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

```bash
npm run dev
```

La aplicación estará posiblemente disponible en `http://localhost:5173`

### 4. Construir para producción

```bash
npm run build
```



