import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Snackbar,
  Alert,
  InputAdornment,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ContactMail,
  Send,
  Person,
  Email,
  Message,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { sendEmail } from "../utils/emailjs";
import { inputStyle } from "../styles/inputStyle";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
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
    } catch {
      setSuccess(false);
    }
  };

  const fields = [
    {
      name: "from_name",
      label: "Nombre",
      icon: <Person color="primary" />,
    },
    {
      name: "from_email",
      label: "Correo electrónico",
      type: "email",
      icon: <Email color="primary" />,
    },
    {
      name: "message",
      label: "Mensaje",
      multiline: true,
      rows: 4,
      icon: <Message color="primary" />,
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="sm">
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 32 }}>
          <Box
            sx={{
              display: "inline-flex",
              gap: 1,
              px: 3,
              py: 1,
              borderRadius: "999px",
              border: "1px solid",
              borderColor: "primary.main",
            }}
          >
            <ContactMail color="primary" />
            <Typography fontWeight={700}>Contacto</Typography>
          </Box>
        </motion.div>

        <Box
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          {fields.map((field, i) => (
            <motion.div key={field.name} {...fadeUp} transition={{ delay: i * 0.1 }}>
              <TextField
                {...field}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {field.icon}
                    </InputAdornment>
                  ),
                }}
                sx={inputStyle(theme)}
              />
            </motion.div>
          ))}

          <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
            <Button
              type="submit"
              fullWidth
              endIcon={<Send />}
              sx={{
                py: 1.5,
                borderRadius: "999px",
                fontWeight: 700,
              }}
            >
              Enviar mensaje
            </Button>
          </motion.div>
        </Box>

        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={() => setSuccess(false)}
        >
          <Alert severity="success">
            ¡Mensaje enviado correctamente!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
