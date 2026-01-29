import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { sendEmail } from "../utils/emailjs";
import { inputStyle } from "../styles/inputStyle";

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export default function ContactForm() {
  const theme = useTheme();
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(formRef.current);
      setSuccess(true);
      formRef.current.reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <motion.div {...fade}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 420,
          }}
        >
          {/* TÍTULO */}
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            mb={1}
          >
            Contacto
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            mb={4}
          >
            Envíame un mensaje y te responderé pronto
          </Typography>

          {/* FORM */}
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              name="from_name"
              label="Nombre"
              required
              fullWidth
              sx={inputStyle(theme)}
            />

            <TextField
              name="from_email"
              label="Correo electrónico"
              type="email"
              required
              fullWidth
              sx={inputStyle(theme)}
            />

            <TextField
              name="message"
              label="Mensaje"
              multiline
              rows={4}
              required
              fullWidth
              sx={inputStyle(theme)}
            />

            <Button
              type="submit"
              size="large"
              sx={{
                mt: 1,
                py: 1.5,
                fontWeight: 700,
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Enviar mensaje
            </Button>
          </Box>
        </Box>
      </motion.div>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success">
          Mensaje enviado correctamente
        </Alert>
      </Snackbar>
    </Box>
  );
}
