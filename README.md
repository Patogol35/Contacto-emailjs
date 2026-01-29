📩 Contact Form – React + Vite + MUI + EmailJS

Formulario de contacto moderno y responsive construido con React (Vite), Material UI, Framer Motion y EmailJS.  
Ideal para portafolios personales o sitios profesionales, con envío de correos sin backend.

--- 

💻 Ver la aplicación desplegada en Vercel

👉 https://jorge-login-gmail.vercel.app/

---

⚙️ Tecnologías utilizadas

- React (Vite)
  
- Material UI (MUI)
  
- 🎬 Framer Motion
  
- ✉️ EmailJS

--- 

📦 Instalación y ejecución

1. Clona el repositorio:

```bash

git clone 
https://github.com/Patogol35/Jorge-front-gmail

```

2. Ingresa a la carpeta del proyecto:

```bash

cd Jorge-front-gmail

```

3. Instala las dependencias:

```bash
  
npm install

```

4. Ejecuta el proyecto:

```bash

npm run dev

```

5. Abre en el navegador:
  
http://localhost:5173

---

⚙️ Variables de entorno

Para producción crea un archivo .env en la raíz del proyecto y añade:

```bash

VITE_BACKEND_URL=https://jorge-back-gmail.onrender.com

```

De esta manera, cualquiera puede reemplazar la URL por su propio backend desplegado.

---

🔄 Flujo de autenticación

- El usuario accede al frontend.
  
- Click en Continuar con Google.
  
- Redirección al backend.
  
- Autenticación con Google OAuth.
  
- Creación de sesión en Django.
  
- Redirección automática al frontend.
  
- Validación de sesión usando /api/me/.

---

🚀 Deploy en Vercel

Después de configurar la variable de entorno:

- Conectar el repositorio en https://vercel.com
  
- Configurar VITE_BACKEND_URL
  
- Deploy automático en cada push

  ---

👨‍💻 Autor

Jorge Patricio Santamaría Cherrez

Máster en Ingeniería de Software y Sistemas Informáticos

