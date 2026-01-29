export const inputStyle = (theme) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 3,
    background:
      theme.palette.mode === "dark"
        ? "rgba(30,41,59,0.6)"
        : "rgba(255,255,255,0.9)",
    transition: "all 0.25s ease",

    "& fieldset": {
      borderColor: theme.palette.divider,
    },

    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },

    "&.Mui-focused fieldset": {
      borderWidth: 2,
      borderColor: theme.palette.primary.main,
    },

    "& input, & textarea": {
      fontWeight: 500,
    },
  },

  "& .MuiInputLabel-root": {
    fontWeight: 600,
  },
});
