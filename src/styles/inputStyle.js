// ===== HELPERS =====
const isDarkMode = (theme) => theme.palette.mode === "dark";

const GLASS_BLUR = {
  card: "28px",
  input: "8px",
};

// ===== LAYOUT =====
export const sectionWrapper = {
  py: { xs: 6, md: 10 },
};

// ===== CONTACT WRAPPER =====
export const contactWrapper = (theme) => {
  const isDark = isDarkMode(theme);

  return {
    p: { xs: 3.5, md: 5 },
    borderRadius: 5,
    position: "relative",
    background: isDark
      ? "linear-gradient(145deg, rgba(15,23,42,0.78), rgba(2,6,23,0.92))"
      : "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(241,245,249,0.9))",
    backdropFilter: `blur(${GLASS_BLUR.card})`,
    border: "1px solid",
    borderColor: theme.palette.divider,
    boxShadow: isDark
      ? "0 30px 70px rgba(0,0,0,0.5)"
      : "0 30px 70px rgba(0,0,0,0.18)",
    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      background: `radial-gradient(circle at top, ${theme.palette.primary.main}22, transparent 60%)`,
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
  background: `${theme.palette.primary.main}14`,
  boxShadow: `0 4px 12px ${theme.palette.primary.main}25`,
  transition: "transform .2s ease",

  "&:hover": {
    transform: "translateY(-1px)",
  },
});

// ===== FORM =====
export const formLayout = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

// ===== INPUTS =====
export const inputStyle = (theme) => {
  const isDark = isDarkMode(theme);

  return {
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      background: isDark
        ? "rgba(2,6,23,0.55)"
        : "rgba(255,255,255,0.88)",
      backdropFilter: `blur(${GLASS_BLUR.input})`,
      transition: "all .25s ease",

      "& input": {
        fontWeight: 500,
      },

      "& textarea": {
        fontWeight: 400,
        lineHeight: 1.6,
      },

      "& fieldset": {
        borderColor: isDark
          ? "rgba(96,165,250,0.22)"
          : "rgba(37,99,235,0.55)",
      },

      "&:hover fieldset": {
        borderColor: theme.palette.primary.light,
      },

      "&:hover": {
        boxShadow: `0 4px 12px ${theme.palette.primary.main}18`,
      },

      "&.Mui-focused": {
        boxShadow: `0 0 0 2px ${theme.palette.primary.main}25`,
      },

      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },

      // ERROR STATE
      "&.Mui-error fieldset": {
        borderColor: theme.palette.error.main,
      },

      "&.Mui-error": {
        boxShadow: `0 0 0 2px ${theme.palette.error.main}25`,
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
  fontSize: "1rem",
  letterSpacing: 0.3,
  textTransform: "none",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  color: "#fff",
  boxShadow: `0 10px 28px ${theme.palette.primary.main}55`,
  transition: "all .25s ease",

  "&:hover": {
    transform: "translateY(-1.5px)",
    boxShadow: `0 14px 36px ${theme.palette.primary.main}70`,
    opacity: 0.96,
  },

  "&:active": {
    transform: "translateY(0)",
  },

  "&.Mui-disabled": {
    opacity: 0.6,
    boxShadow: "none",
    transform: "none",
  },
});

// ===== ALERT =====
export const successAlert = {
  fontWeight: 600,
  borderRadius: 2,
  backdropFilter: "blur(8px)",
};
