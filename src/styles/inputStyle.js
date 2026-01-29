export const contactFormStyles = (theme) => ({
  section: {
    py: { xs: 6, md: 10 },
  },

  headerWrapper: {
    textAlign: "center",
    mb: 5,
  },

  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    px: 3,
    py: 1,
    borderRadius: "999px",
    border: "1px solid",
    borderColor: "primary.main",
    mb: 2,
  },

  subtitle: {
    color: "text.secondary",
    fontWeight: 500,
  },

  card: {
    p: { xs: 3, sm: 4 },
    borderRadius: 4,
    background:
      theme.palette.mode === "dark"
        ? "rgba(15,23,42,0.55)"
        : "rgba(255,255,255,0.8)",
    backdropFilter: "blur(20px)",
    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? "rgba(148,163,184,0.15)"
        : "rgba(2,6,23,0.1)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  adornmentMultiline: {
    alignSelf: "flex-start",
    mt: 1,
  },

  button: {
    py: 1.7,
    borderRadius: "999px",
    fontWeight: 700,
    textTransform: "none",
    background: (theme) =>
      `linear-gradient(135deg,
        ${theme.palette.primary.main},
        ${theme.palette.primary.dark})`,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },

  alert: {
    fontWeight: 600,
  },
});
