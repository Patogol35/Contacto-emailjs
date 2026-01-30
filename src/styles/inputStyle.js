// ===== LAYOUT =====
export const sectionWrapper = {
  py: { xs: 6, md: 10 },
};

export const formLayout = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

// ===== CONTACT WRAPPER =====
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

// ===== HEADER =====
export const headerBadge = (theme) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  px: 3,
  py: 1,
  mb: 2,
  borderRadius: "999px",
  border: "1px solid",
  borderColor: theme.palette.primary.main,
});

export const headerText = {
  color: "text.secondary",
};

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
  };
};

export const adornmentStyle = {
  color: "primary.main",
};

// ===== BUTTON =====
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

// ===== ALERT =====
export const successAlert = {
  fontWeight: 600,
};
