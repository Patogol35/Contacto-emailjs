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
import { useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { sendEmail } from "../utils/emailjs";
import { inputStyle } from "../styles/inputStyle";
import {
  contactWrapper,
  headerBadge,
  formLayout,
  submitButton,
} from "../styles/contactFormStyles";

const MotionBox = motion(Box);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45 },
  }),
};

const fields = [
  { name: "from_name", label: "Nombre", icon: <Person /> },
  { name: "from_email", label: "Correo electrónico", type: "email", icon: <Email /> },
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
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="sm">
        <MotionBox
          component={Paper}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          sx={contactWrapper(theme)}
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
          <Box component="form" ref={formRef} onSubmit={handleSubmit} sx={formLayout}>
            {fields.map((field, i) => (
              <MotionBox
                key={field.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
              >
                <TextField
                  {...field}
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "primary.main" }}>
                        {field.icon}
                      </InputAdornment>
                    ),
                  }}
                  sx={inputStyle(theme)}
                />
              </MotionBox>
            ))}

            {/* BUTTON */}
            <MotionBox custom={fields.length + 1} variants={fadeUp} initial="hidden" whileInView="visible">
              <Button
                type="submit"
                fullWidth
                endIcon={<Send />}
                sx={submitButton(theme)}
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
