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
import {
  inputStyle,
  contactWrapper,
  headerBadge,
  formLayout,
  submitButton,
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
  whileInView: "visible",
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

export default function ContactForm() {
  const theme = useTheme();
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const styles = useMemo(
    () => ({
      input: inputStyle(theme),
      wrapper: contactWrapper(theme),
      button: submitButton(theme),
    }),
    [theme]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(formRef.current);
      setSuccess(true);
      formRef.current.reset();
    } catch (err) {
      console.error("Error enviando mensaje:", err);
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="sm">
        <MotionBox
          component={Paper}
          elevation={0}
          {...motionProps}
          sx={styles.wrapper}
        >
          {/* HEADER */}
          <Box textAlign="center" mb={4}>
            <Box
              sx={{
                ...headerBadge,
                borderColor: "primary.main",
                mb: 2,
              }}
            >
              <ContactMail color="primary" />
              <Typography fontWeight={700}>Contacto</Typography>
            </Box>

            <Typography color="text.secondary">
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
            {fields.map((field, i) => (
              <MotionBox key={field.name} custom={i} {...motionProps}>
                <TextField
                  {...field}
                  fullWidth
                  required
                  inputProps={{ "aria-label": field.label }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{ color: "primary.main" }}
                      >
                        {field.icon}
                      </InputAdornment>
                    ),
                  }}
                  sx={styles.input}
                />
              </MotionBox>
            ))}

            {/* BUTTON */}
            <MotionBox custom={fields.length + 1} {...motionProps}>
              <Button
                type="submit"
                fullWidth
                endIcon={<Send />}
                sx={styles.button}
              >
                Enviar mensaje
              </Button>
            </MotionBox>
          </Box>
        </MotionBox>

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
