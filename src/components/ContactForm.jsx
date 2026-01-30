import {
  Box,
  Button,
  Container,
  Paper,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { useContactForm } from "../hooks/useContactForm";
import {
  contactWrapper,
  formLayout,
  submitButton,
  sectionWrapper,
} from "../styles/inputStyle";
import { ContactHeader } from "./ContactHeader";
import { AnimatedField } from "./AnimatedField";
import { StatusSnackbar } from "./StatusSnackbar";

const MotionPaper = motion(Paper);

const fields = [
  { name: "from_name", label: "Nombre", icon: Person },
  { name: "from_email", label: "Correo", type: "email", icon: Email },
  { name: "message", label: "Mensaje", multiline: true, rows: 4, icon: Message },
];

export default function ContactForm() {
  const theme = useTheme();
  const {
    formRef,
    success,
    error,
    loading,
    handleSubmit,
    handleClose,
  } = useContactForm();

  const motionProps = useMemo(
    () => ({
      initial: "hidden",
      animate: "visible",
    }),
    []
  );

  return (
    <Box sx={sectionWrapper}>
      <Container maxWidth="sm">
        <MotionPaper
          elevation={0}
          {...motionProps}
          sx={contactWrapper(theme)}
        >
          <ContactHeader />

          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            sx={formLayout}
          >
            {fields.map((field, i) => (
              <AnimatedField key={field.name} field={field} index={i} />
            ))}

            <Button
              type="submit"
              fullWidth
              endIcon={<Send />}
              disabled={loading}
              sx={submitButton(theme)}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </Box>
        </MotionPaper>

        <StatusSnackbar
          open={success}
          onClose={handleClose}
          severity="success"
          message="¡Mensaje enviado con éxito! 🚀"
        />

        <StatusSnackbar
          open={error}
          onClose={handleClose}
          severity="error"
          message="Ocurrió un error al enviar el mensaje 😥"
        />
      </Container>
    </Box>
  );
}
