// ===== INPUTS =====
export const inputStyle = (theme) => {
  const isDark = theme.palette.mode === "dark";

  return {
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      background: isDark
        ? "rgba(15,23,42,0.55)"
        : "rgba(255,255,255,0.75)",
      backdropFilter: "blur(14px)",

      "& input, & textarea": {
        fontWeight: 600,
        color: theme.palette.text.primary,
      },

      "& input::placeholder, & textarea::placeholder": {
        color: isDark
          ? "rgba(255,255,255,0.45)"
          : "rgba(2,6,23,0.45)",
      },

      "& fieldset": {
        borderColor: isDark
          ? "rgba(96,165,250,0.35)"
          : "rgba(37,99,235,0.85)",
      },

      "&:hover fieldset, &.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },

    "& .MuiInputLabel-root": {
      fontWeight: 600,
    },
  };
};

// ===== CONTACT FORM =====
export const contactWrapper = (theme) => {
  const isDark = theme.palette.mode === "dark";

  return {
    p: { xs: 3, md: 4 },
    borderRadius: 4,
    background: isDark
      ? "rgba(15,23,42,0.6)"
      : "rgba(255,255,255,0.8)",
    backdropFilter: "blur(18px)",
    border: "1px solid",
    borderColor: theme.palette.divider,
  };
};

export const headerBadge = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  px: 3,
  py: 1,
  borderRadius: "999px",
  border: "1px solid",
};

export const formLayout = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

export const submitButton = (theme) => ({
  py: 1.7,
  borderRadius: "999px",
  fontWeight: 700,
  textTransform: "none",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  color: "#fff",
  "&:hover": {
    opacity: 0.9,
  },
});
