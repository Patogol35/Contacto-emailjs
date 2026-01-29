export const inputStyle = (theme) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.background.paper
        : "#fff",

    "& fieldset": {
      borderColor: theme.palette.divider,
    },

    "&:hover fieldset": {
      borderColor: theme.palette.text.primary,
    },

    "&.Mui-focused fieldset": {
      borderWidth: 2,
      borderColor: theme.palette.primary.main,
    },
  },

  "& label": {
    fontWeight: 500,
  },
});
