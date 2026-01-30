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
import { useTheme } from "@mui/material/styles";
import { useContactForm } from "../hooks/useContactForm";
import {
  inputStyle,
  contactWrapper,
  headerBadge,
  formLayout,
  submitButton,
  sectionWrapper,
  headerText,
  adornmentStyle,
  successAlert,
} from "../styles/inputStyle";

const MotionBox = motion(Box);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45 },
  }),
};

const motionProps = {
  variants: fadeUp,
  initial: "hidden",
  animate: "visible",
};

const fields = [
  { name: "from_name", label: "Nombre", icon: <Person /> },
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

export default function ContactForm() {
  const theme = useTheme();
  const {
    formRef,
    success,
    loading,
    handleSubmit,
    handleClose,
  } = useContactForm();

  return (
    <Box sx={sectionWrapper}>
      <Container maxWidth="sm">
        <MotionBox
          component={Paper}
          elevation={0}
          {...motionProps}
          sx={contactWrapper(theme)}
        >
          {/* HEADER */}
          <Box textAlign="center" mb={4}>
            <Box sx={headerBadge(theme)}>
              <ContactMail color="primary" />
              <Typography fontWeight={700}>Contacto</Typography>
            </Box>

            <Typography sx={headerText}>
              Escríbeme y te responderé lo antes posible
            </Typography>
          </Box>

          {/* FORM */}
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            sx={formLayout}
          >
            {fields.map((field) => (
              <TextField
                key={field.name}
                {...field}
                fullWidth
                required
                aria-label={field.label}
                autoComplete={
                  field.name === "from_email"
                    ? "email"
                    : field.name === "from_name"
                    ? "name"
                    : "off"
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={adornmentStyle}>
                      {field.icon}
                    </InputAdornment>
                  ),
                }}
                sx={inputStyle(theme)}
              />
            ))}

            <MotionBox custom={fields.length + 1} {...motionProps}>
              <Button
                type="submit"
                fullWidth
                endIcon={<Send />}
                disabled={loading}
                sx={submitButton(theme)}
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </MotionBox>
          </Box>
        </MotionBox>

        {/* ALERT */}
        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success" sx={successAlert}>
            ¡Mensaje enviado con éxito! 🚀
          </Alert>
        </Snackbar>

        {/* AUTHOR */}
        <Box mt={4} textAlign="center">
          <Typography
            variant="body2"
            sx={{ opacity: 0.7, fontSize: "0.85rem" }}
          >
            © {new Date().getFullYear()} — Jorge Patricio Santamaría Cherrez
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
