📩 Contact Form – React + Vite + MUI + EmailJS

Formulario de contacto moderno, responsive y animado, construido con React (Vite), Material UI, Framer Motion y EmailJS.
Permite enviar correos electrónicos sin necesidad de backend, ideal para portafolios personales y sitios profesionales.

--- 

💻 Ver la aplicación desplegada en Vercel

👉 https://contacto-emailjs.vercel.app/

---

✨ Características
- Diseño moderno con Material UI
  
- Totalmente responsive
  
- Animaciones suaves con Framer Motion
  
- Envío de correos sin backend (EmailJS)
  
- Uso de variables de entorno
  
- Deploy listo para Vercel

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

To Email:

Pon tu correo, ej: patogol3737@gmail.com

- Subject

Ej: 📩 Nuevo mensaje desde el portafolio

- To Email

tu-correo@gmail.com

- From Name

{{from_name}}

- Reply to

{{from_email}}

- Content (HTML)

```bash

<div style="font-family: system-ui, sans-serif; font-size: 12px">
  <p>
    Mensaje enviado por <strong>{{from_name}}</strong>
  </p>

  <p><strong>Email:</strong> {{from_email}}</p>

  <hr />

  <p><strong>Mensaje:</strong></p>
  <p>{{message}}</p>
</div>

```
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

