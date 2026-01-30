import { useRef, useState } from "react";
import { sendEmail } from "../utils/emailjs";

export function useContactForm() {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(false);

    try {
      await sendEmail(formRef.current);
      setSuccess(true);
      formRef.current.reset();
    } catch (err) {
      console.error("Error enviando mensaje:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setError(false);
  };

  return {
    formRef,
    success,
    error,
    loading,
    handleSubmit,
    handleClose,
  };
}
