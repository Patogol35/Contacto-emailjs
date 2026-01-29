import emailjs from "@emailjs/browser";

export const sendEmail = (form) => {
  return emailjs.sendForm(
    import.meta.env.VITE_EMAIL_SERVICE,
    import.meta.env.VITE_EMAIL_TEMPLATE,
    form,
    import.meta.env.VITE_EMAIL_PUBLIC_KEY
  );
};
