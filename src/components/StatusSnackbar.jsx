import { Snackbar, Alert } from "@mui/material";
import { successAlert } from "../styles/inputStyle";

export function StatusSnackbar({ open, onClose, severity, message }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={severity} sx={successAlert}>
        {message}
      </Alert>
    </Snackbar>
  );
}
