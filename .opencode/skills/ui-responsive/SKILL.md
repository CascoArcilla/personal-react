---
name: ux-responsive
description: Reglas de diseño para asegurar una interfaz móvil y accesible
---

## Reglas de aplicacion
*   **Viewport:** Asegúrate siempre de incluir `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
*   **Touch Targets:** Todos los elementos interactivos (botones, enlaces) deben tener una altura/anchura mínima para facilitar el toque.
*   **Jerarquía:** En móvil, prioriza el contenido principal: colapsa menús de navegación en un icono "hamburguesa" y evita tablas complejas.
*   **Solapamiento:** Asegurarse de que elementos fijos (en vertical u horizontal) no solapen u oculten contenido principal.
*   **Media Queries:** Usar los breakpoints que tailwindcss trae por defecto.

## Cuándo usarme
*   Cuando vayas a crear nuevos componentes de UI.
*   Cuando necesites ajustar los estilos para mejorar la legibilidad en pantallas pequeñas.
*   Cuando se te pida revisar el diseño de botones, formularios o menús de navegación.