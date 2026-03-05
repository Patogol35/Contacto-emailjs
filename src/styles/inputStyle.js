export const inputStyle = (theme) => {
  const isDark = theme.palette.mode === "dark";

  return {
    "& .MuiInputLabel-root": {
      fontWeight: 500,
      fontSize: "0.95rem",
      letterSpacing: "0.3px",
      color: isDark ? "#cbd5f5" : "#334155",

      "&.Mui-focused": {
        color: theme.palette.primary.main,
      },
    },

    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      background: isDark
        ? "rgba(2,6,23,0.60)"
        : "rgba(255,255,255,0.92)",

      backdropFilter: "blur(8px)",
      transition: "all .25s ease",

      "& fieldset": {
        borderColor: isDark
          ? "rgba(96,165,250,0.25)"
          : "rgba(37,99,235,0.45)",
      },

      "&:hover fieldset": {
        borderColor: theme.palette.primary.light,
      },

      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },

    "& .MuiOutlinedInput-input": {
      padding: "15px",
      fontSize: "0.95rem",
      fontWeight: 500,
      color: isDark ? "#e5e7eb" : "#0f172a",
    },

    "& .MuiOutlinedInput-input::placeholder": {
      color: isDark
        ? "rgba(203,213,225,0.55)"
        : "rgba(100,116,139,0.65)",
      opacity: 1,
      fontWeight: 400,
    },

    "& textarea": {
      lineHeight: 1.6,
    },
  };
};
