export const inputStyle = (theme) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 3,
    background:
      theme.palette.mode === "dark"
        ? "rgba(15,23,42,0.55)"
        : "rgba(255,255,255,0.75)",
    backdropFilter: "blur(14px)",

    "& input, & textarea": {
      fontWeight: 600,
      color: theme.palette.mode === "dark" ? "#ffffff" : "#020617",
    },

    "& input::placeholder, & textarea::placeholder": {
      color:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.45)"
          : "rgba(2,6,23,0.45)",
      fontWeight: 400,
    },

    "& fieldset": {
      borderColor:
        theme.palette.mode === "dark"
          ? "rgba(96,165,250,0.35)"
          : "rgba(37,99,235,0.85)",
    },

    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },

  "& .MuiInputLabel-root": {
    fontWeight: 600,
    color:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.85)"
        : "rgba(2,6,23,0.85)",
  },
});
