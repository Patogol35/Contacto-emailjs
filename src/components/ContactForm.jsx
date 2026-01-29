import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Snackbar,
  Alert,
  InputAdornment,
  Card,
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
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut" },
};

const fields = [
  {
    name: "from_name",
    label: "Nombre",
    icon: <Person fontSize="small" />,
  },
  {
    name: "from_email",
    label: "Correo electrónico",
    type: "email",
    icon: <Email fontSize="small" />,
  },
  {
    name: "message",
    label: "Mensaje",
    multiline: true,
    rows: 4,
    icon: <Message fontSize="small" />,
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
      console.error("Error al enviar email:", err);
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="sm">
        {/* HEADER */}
        <motion.div {...fadeUp}>
          <Box textAlign="center" mb={4}>
            <ContactMail color="primary" sx={{ fontSize: 42, mb: 1 }} />
            <Typography variant="h5" fontWeight={800}>
              Contáctame
            </Typography>
            <Typography color="text.secondary" mt={1}>
              Escríbeme y te responderé lo antes posible
            </Typography>
          </Box>
        </motion.div>

        {/* CARD FORM */}
        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
          <Card
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background:
                theme.palette.mode === "dark"
                  ? "rgba(15,23,42,0.6)"
                  : "rgba(255,255,255,0.85)",
              backdropFilter: "blur(16px)",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
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
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  <TextField
                    {...field}
                    fullWidth
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ opacity: 0.7 }}
                        >
                          {field.icon}
                        </InputAdornment>
                      ),
                    }}
                    sx={inputStyle(theme)}
                  />
                </motion.div>
              ))}

              <motion.div {...fadeUp} transition={{ delay: 0.45 }}>
                <Button
                  type="submit"
                  size="large"
                  endIcon={<Send />}
                  sx={{
                    mt: 1,
                    py: 1.4,
                    borderRadius: "999px",
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: theme.shadows[4],
                    "&:hover": {
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  Enviar mensaje
                </Button>
              </motion.div>
            </Box>
          </Card>
        </motion.div>

        {/* SUCCESS */}
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
