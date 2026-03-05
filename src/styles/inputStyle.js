export const inputStyle = (theme) => {
  const isDark = isDarkMode(theme);

  return {
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      background: isDark
        ? "rgba(2,6,23,0.60)"
        : "rgba(255,255,255,0.92)",

      backdropFilter: `blur(${GLASS_BLUR.input})`,
      transition: "all .25s ease",

      fontSize: "0.95rem",
      minHeight: "48px",

      "& input": {
        fontWeight: 500,
        padding: "10px 14px",
        color: isDark ? "#e5e7eb" : "#0f172a",
      },

      "& textarea": {
        fontWeight: 400,
        padding: "10px 14px",
        lineHeight: 1.6,
        color: isDark ? "#e5e7eb" : "#0f172a",
      },

      // PLACEHOLDER
      "& input::placeholder, & textarea::placeholder": {
        color: isDark
          ? "rgba(203,213,225,0.55)"
          : "rgba(100,116,139,0.65)",
        opacity: 1,
        fontWeight: 400,
      },

      // BORDER
      "& fieldset": {
        borderColor: isDark
          ? "rgba(96,165,250,0.22)"
          : "rgba(37,99,235,0.45)",
        transition: "border-color .25s ease",
      },

      "&:hover fieldset": {
        borderColor: theme.palette.primary.light,
      },

      "&:hover": {
        boxShadow: `0 4px 12px ${theme.palette.primary.main}18`,
      },

      // FOCUS
      "&.Mui-focused": {
        boxShadow: `0 0 0 2px ${theme.palette.primary.main}25`,
      },

      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },

      // ERROR
      "&.Mui-error fieldset": {
        borderColor: theme.palette.error.main,
      },

      "&.Mui-error": {
        boxShadow: `0 0 0 2px ${theme.palette.error.main}25`,
      },
    },

    // LABEL
    "& .MuiFormLabel-root": {
      fontWeight: 500,
      letterSpacing: ".2px",
      color: isDark
        ? "rgba(226,232,240,0.75)"
        : "rgba(15,23,42,0.7)",

      "&.Mui-focused": {
        color: theme.palette.primary.main,
      },

      "&.Mui-error": {
        color: theme.palette.error.main,
      },
    },
  };
};
