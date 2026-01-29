import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Snackbar,
  Alert,
  InputAdornment,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ContactMail,
  Send,
  Person,
  Email,
  Message,
} from "@mui/icons-material";
import { useRef, useState, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { sendEmail } from "../utils/emailjs";
import { inputStyle } from "../styles/inputStyle";
import { contactFormStyles } from "../styles/contactFormStyles";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function ContactForm() {
  const theme = useTheme();
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const inputStyles = useMemo(() => inputStyle(theme), [theme]);
  const styles = useMemo(() => contactFormStyles(theme), [theme]);

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
      icon: <Person />,
    },
    {
      name: "from_email",
      label: "Correo electrónico",
      type: "email",
      icon: <Email />,
    },
    {
      name: "message",
      label: "Mensaje",
      multiline: true,
      rows: 4,
      icon: <Message />,
    },
  ];

  return (
    <Box sx={styles.section}>
      <Container maxWidth="sm">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Box sx={styles.headerWrapper}>
            <Box sx={styles.chip}>
              <ContactMail color="primary" />
              <Typography fontWeight={700}>Contacto</Typography>
            </Box>

            <Typography sx={styles.subtitle}>
              ¿Tienes un proyecto en mente? Escríbeme 👇
            </Typography>
          </Box>
        </motion.div>

        {/* CARD */}
        <Paper elevation={0} sx={styles.card}>
          <Box
            component={motion.form}
            ref={formRef}
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            sx={styles.form}
          >
            {fields.map((field) => (
              <motion.div key={field.name} variants={itemVariants}>
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
                            ? styles.adornmentMultiline
                            : undefined
                        }
                      >
                        {field.icon}
                      </InputAdornment>
                    ),
                  }}
                  sx={inputStyles}
                />
              </motion.div>
            ))}

            {/* BOTÓN */}
            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                fullWidth
                endIcon={<Send />}
                sx={styles.button}
              >
                Enviar mensaje
              </Button>
            </motion.div>
          </Box>
        </Paper>

        {/* ALERT */}
        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success" sx={styles.alert}>
            ¡Mensaje enviado con éxito! 🚀
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
