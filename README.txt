═══════════════════════════════════════════════
CONTACTOS FLASK — CONTACTOS
Proyecto Final de Programación
═══════════════════════════════════════════════

DESCRIPCIÓN
-----------

ContactOS es una aplicación web desarrollada con Flask que permite la
gestión completa de contactos personales mediante operaciones CRUD
(Crear, Leer, Actualizar y Eliminar).

La información se almacena utilizando archivos Excel (.xlsx)
mediante la librería OpenPyXL.

FUNCIONALIDADES IMPLEMENTADAS
-----------------------------

✓ Inicio de sesión con validación de usuario y contraseña.

✓ Dashboard principal.

✓ Registro de nuevos contactos.

✓ Edición de contactos existentes.

✓ Eliminación de contactos con confirmación.

✓ Visualización detallada de cada contacto.

✓ Búsqueda de contactos por:
  - Nombre
  - Apellido
  - Teléfono
  - Correo electrónico

✓ Filtro de contactos favoritos.

✓ Reporte general con:
  - Total de contactos
  - Total de favoritos
  - Categoría más utilizada
  - Último contacto agregado
  - Tabla completa de contactos

✓ Almacenamiento persistente en Excel.

✓ Diseño responsivo y moderno.

REQUISITOS
-----------

- Python 3.11 o superior
- Flask
- OpenPyXL

INSTALACIÓN
-----------

1. Abrir una terminal en la carpeta del proyecto.

2. Instalar dependencias:

   pip install flask
   pip install openpyxl

3. Ejecutar la aplicación:

   python app.py

4. Abrir el navegador en:

   http://127.0.0.1:5000

CREDENCIALES DE ACCESO
----------------------

Usuario:
admin

Contraseña:
1234

ESTRUCTURA DEL PROYECTO
-----------------------

Proyecto/
│
├── app.py
├── contactos.xlsx
│
├── templates/
│   ├── login.html
│   ├── dashboard.html
│   ├── add_contact.html
│   ├── edit_contact.html
│   ├── detail.html
│   └── report.html
│
├── static/
│   ├── css/
│   │   └── styles.css
│   │
│   └── js/
│       └── app.js
│
└── README.txt

AUTOR
------

Nombre: [Tu nombre]
Curso: Programación
Institución: UCenfotec

═══════════════════════════════════════════════
FIN DEL DOCUMENTO
═══════════════════════════════════════════════