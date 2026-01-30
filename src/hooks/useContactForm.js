import { useRef, useState } from "react";
import { sendEmail } from "../utils/emailjs";

export function useContactForm() {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail(formRef.current);
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Error enviando mensaje:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => setSuccess(false);

  return {
    formRef,
    success,
    loading,
    handleSubmit,
    handleClose,
  };
}
