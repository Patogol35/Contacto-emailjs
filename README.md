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

<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>
    A message by <strong>{{from_name}}</strong> has been received.
    Kindly respond at your earliest convenience.
  </div>

  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>

        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>

          <div style="color: #6b7280; font-size: 13px">
            {{from_email}}
          </div>
        </td>
      </tr>
    </table>
  </div>

  <div style="margin-top: 20px; font-size: 14px">
    <strong>Message:</strong>
    <p style="margin-top: 6px">{{message}}</p>
  </div>
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

