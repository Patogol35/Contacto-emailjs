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
  
- Framer Motion
  
- EmailJS

--- 

🔐 Configuración de EmailJS (PASO A PASO)

1. Crear cuenta

- Entra a 👉 https://www.emailjs.com
Inicia sesión (puedes usar Google).

2. Crear Email Service
  
- Ve a Email Services

- Click en Add New Service

- Selecciona Gmail (recomendado)

- Conecta tu correo

- Guarda y copia el Service ID

Ejemplo:

service_fd9ejbr

3. Crear la plantilla (Template)
   
- Ve a Email Templates
  
- Click en Create New Template
  
- Asigna un nombre (ej: contact_form)
  
- Guarda y copia el Template ID
  
Ejemplo:

template_pwsn0sn

4. Configurar la plantilla

Subject

📩 Nuevo mensaje de {{from_name}}

To Email

tu-correo@gmail.com

From Name

{{from_name}}

From Email

Use Default Email Address

Reply to

{{from_email}}

Content (HTML)

Html
<h3>📨 Nuevo mensaje desde el portafolio</h3>

<p><strong>Nombre:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>

<p><strong>Mensaje:</strong></p>
<p>{{message}}</p>

5. Obtener la Public Key
   
- Ve a Account → API Keys
  
- Copia la Public Key
Ejemplo:

Try7tc29-wnfxyPyf

---

📄 Variables de entorno

- Crea un archivo .env en la raíz del proyecto:


VITE_EMAIL_SERVICE=service_fd9ejbr
VITE_EMAIL_TEMPLATE=template_pwsn0sn
VITE_EMAIL_PUBLIC_KEY=Try7tc29-wnfxyPyf

---

✉️ Variables usadas en el formulario

from_name - Nombre del usuario

from_email - Email del usuario
message - Mensaje

---

📦 Instalación y ejecución

1. Clona el repositorio:

```bash

git clone 
https://github.com/Patogol35/Contacto-emailjs

```

2. Ingresa a la carpeta del proyecto:

```bash

cd Contacto-emailjs

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

👨‍💻 Autor

Jorge Patricio Santamaría Cherrez

Máster en Ingeniería de Software y Sistemas Informáticos

