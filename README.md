---

# ContactOS 📇

**ContactOS** es un sistema de gestión de contactos basado en la web que permite a los usuarios organizar su libreta de direcciones de manera eficiente y segura. La aplicación utiliza una arquitectura moderna con un backend en Python y una base de datos basada en archivos de Excel para facilitar la portabilidad de los datos.

## 🚀 Características Principales

*   **Gestión Completa de Contactos (CRUD):** Creación, lectura, edición y eliminación de registros de contacto.
*   **Organización Avanzada:** Clasificación por categorías (Familia, Trabajo, Amigos, etc.) y opción de marcar contactos como favoritos.
*   **Validación de Datos:** Verificación en tiempo real de formatos de correo electrónico y números de teléfono de 8 dígitos.
*   **Búsqueda y Ordenamiento:** Filtro de contactos por nombre y capacidad de ordenar la lista alfabéticamente.
*   **Interfaz Moderna (UI/UX):** Diseño minimalista en modo oscuro con barra lateral responsiva, ventanas modales de confirmación y notificaciones tipo "toast".
*   **Reportes Estadísticos:** Generación de informes con el total de contactos registrados y cantidad de favoritos.
*   **Seguridad:** Sistema de autenticación con inicio de sesión y registro de usuarios.

## 🛠️ Tecnologías Utilizadas

*   **Backend:** [Python](https://www.python.org/) con el framework [Flask](https://flask.palletsprojects.com/).
*   **Base de Datos:** Archivo Excel (`contactos.xlsx`) gestionado mediante la librería **openpyxl**.
*   **Frontend:** HTML5, CSS3 (Custom Properties) y JavaScript vanilla.
*   **Diseño:** Estilo minimalista centrado en la legibilidad y componentes interactivos.

## 📋 Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar su mantenimiento:

```text
nombre_apellido/
├── app.py              # Lógica principal del servidor Flask
├── contactos.xlsx      # Base de datos en formato Excel
├── static/             # Archivos estáticos
│   ├── css/            # Hojas de estilo (styles.css)
│   ├── js/             # Lógica de interfaz (app.js)
│   └── img/            # Recursos visuales
└── templates/          # Vistas HTML (Login, Dashboard, Detalle, etc.)
```

## ⚙️ Instalación y Ejecución

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Instalar dependencias:**
    Asegúrate de tener Python instalado y ejecuta:
    ```bash
    pip install flask openpyxl
    ```

2.  **Preparar la base de datos:**
    Verifica que el archivo `contactos.xlsx` esté en la raíz del proyecto con los encabezados: *Nombre, Apellido, Teléfono, Correo, Dirección, Categoría, Favorito*.

3.  **Correr la aplicación:**
    ```bash
    python app.py
    ```
    La aplicación estará disponible en `http://127.0.0.1:5000`.

## 🔐 Acceso al Sistema

El sistema cuenta con credenciales de administrador predefinidas para pruebas iniciales:
*   **Usuario:** `admin`
*   **Contraseña:** `1234`

---
**Nota:** Este proyecto fue desarrollado como parte de la evaluación de Programación para Web del Colegio Técnico Profesional.
