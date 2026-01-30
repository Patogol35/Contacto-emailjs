// ===== LAYOUT =====
export const sectionWrapper = {
  py: { xs: 6, md: 10 },
};

// ===== CONTACT WRAPPER =====
export const contactWrapper = (theme) => {
  const isDark = theme.palette.mode === "dark";

  return {
    p: { xs: 3.5, md: 5 },
    borderRadius: 5,
    position: "relative",
    background: isDark
      ? "linear-gradient(145deg, rgba(15,23,42,0.75), rgba(2,6,23,0.9))"
      : "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(241,245,249,0.85))",
    backdropFilter: "blur(20px)",
    border: "1px solid",
    borderColor: theme.palette.divider,
    boxShadow: isDark
      ? "0 25px 60px rgba(0,0,0,0.45)"
      : "0 25px 60px rgba(0,0,0,0.15)",
    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      background: `radial-gradient(circle at top, ${theme.palette.primary.main}20, transparent 60%)`,
      pointerEvents: "none",
    },
  };
};

// ===== HEADER =====
export const headerBadge = (theme) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 1.2,
  px: 3.5,
  py: 1.2,
  mb: 2.5,
  borderRadius: "999px",
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  background: `${theme.palette.primary.main}15`,
});

export const headerText = {
  color: "text.secondary",
  maxWidth: 420,
  mx: "auto",
};

// ===== FORM =====
export const formLayout = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "1fr 1fr",
  },
  gap: 3,
};

// ===== INPUTS =====
export const inputStyle = (theme) => {
  const isDark = theme.palette.mode === "dark";

  return {
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      background: isDark
        ? "rgba(2,6,23,0.6)"
        : "rgba(255,255,255,0.85)",
      backdropFilter: "blur(12px)",
      transition: "all .25s ease",

      "& input, & textarea": {
        fontWeight: 600,
      },

      "& fieldset": {
        borderColor: isDark
          ? "rgba(96,165,250,0.25)"
          : "rgba(37,99,235,0.6)",
      },

      "&:hover fieldset": {
        borderColor: theme.palette.primary.light,
      },

      "&.Mui-focused": {
        boxShadow: `0 0 0 2px ${theme.palette.primary.main}25`,
      },

      "&.Mui-focused fieldset": {
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
  py: 1.8,
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "1rem",
  letterSpacing: 0.3,
  textTransform: "none",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  color: "#fff",
  boxShadow: `0 10px 30px ${theme.palette.primary.main}55`,
  transition: "all .25s ease",

  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 15px 40px ${theme.palette.primary.main}75`,
    opacity: 0.95,
  },

  "&:active": {
    transform: "translateY(0)",
  },
});

// ===== ALERT =====
export const successAlert = {
  fontWeight: 600,
  borderRadius: 2,
};
