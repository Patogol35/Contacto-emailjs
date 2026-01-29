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
    } catch (error) {
      console.error("Error al enviar email:", error);
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
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="sm">
        {/* TÍTULO */}
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 32 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
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

        {/* SUBTÍTULO */}
        <motion.div {...fadeUp}>
          <Typography
            textAlign="center"
            fontWeight={600}
            mb={4}
            color="text.secondary"
          >
            Ponte en contacto conmigo a través de este formulario
          </Typography>
        </motion.div>

        {/* FORM */}
        <Box
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          {fields.map((field, i) => (
            <motion.div
              key={field.name}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              <TextField
                {...field}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={
                        field.multiline
                          ? { alignSelf: "flex-start", mt: 1 }
                          : {}
                      }
                    >
                      {field.icon}
                    </InputAdornment>
                  ),
                }}
                sx={inputStyle(theme)}
              />
            </motion.div>
          ))}

          {/* BOTÓN */}
          <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
            <Button
              type="submit"
              fullWidth
              endIcon={<Send />}
              sx={{
                py: 1.6,
                borderRadius: "999px",
                fontWeight: 700,
                textTransform: "none",
              }}
            >
              Enviar mensaje
            </Button>
          </motion.div>
        </Box>

        {/* ALERT */}
        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success" sx={{ fontWeight: 600 }}>
            ¡Mensaje enviado con éxito! 🚀
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
          }
