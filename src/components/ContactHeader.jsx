import { Box, Typography } from "@mui/material";
import { ContactMail } from "@mui/icons-material";
import { headerBadge } from "../styles/inputStyle";

export function ContactHeader() {
  return (
    <Box textAlign="center" mb={4}>
      <Box sx={headerBadge}>
        <ContactMail color="primary" />
        <Typography fontWeight={700}>Contacto</Typography>
      </Box>

      <Typography
        variant="subtitle2"
        sx={{ mt: 1, fontWeight: 500, opacity: 0.75 }}
      >
        Jorge Patricio Santamaría Cherrez
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{ mt: 1, fontWeight: 500, opacity: 0.75 }}
      >
        Escríbeme y te responderé lo antes posible
      </Typography>
    </Box>
  );
}
