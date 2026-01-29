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
          elevation={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background:
              theme.palette.mode === "dark"
                ? "rgba(15,23,42,0.6)"
                : "rgba(255,255,255,0.8)",
            backdropFilter: "blur(18px)",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          {/* HEADER */}
          <Box textAlign="center" mb={4}>
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
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
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
                      <InputAdornment
                        position="start"
                        sx={{ color: "primary.main" }}
                      >
                        {field.icon}
                      </InputAdornment>
                    ),
                  }}
                  sx={inputStyle(theme)}
                />
              </MotionBox>
            ))}

            {/* BUTTON */}
            <MotionBox
              custom={fields.length + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
            >
              <Button
                type="submit"
                fullWidth
                endIcon={<Send />}
                sx={{
                  py: 1.7,
                  borderRadius: "999px",
                  fontWeight: 700,
                  textTransform: "none",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  color: "#fff",
                  "&:hover": {
                    opacity: 0.9,
                  },
                }}
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
