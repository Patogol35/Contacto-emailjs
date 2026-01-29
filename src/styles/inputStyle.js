export const contactWrapper = (theme) => ({
  p: { xs: 3, md: 4 },
  borderRadius: 4,
  background:
    theme.palette.mode === "dark"
      ? "rgba(15,23,42,0.6)"
      : "rgba(255,255,255,0.85)",
  backdropFilter: "blur(18px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
});

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
