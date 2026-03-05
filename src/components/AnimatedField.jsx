import { TextField, InputAdornment } from "@mui/material";
import { motion } from "framer-motion";
import { adornmentStyle, inputStyle } from "../styles/inputStyle";
import { useTheme } from "@mui/material/styles";

const MotionBox = motion.div;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export function AnimatedField({ field, index }) {
  const theme = useTheme();
  const Icon = field.icon;

  return (
    <MotionBox
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <TextField
        name={field.name}
        label={field.label}
        placeholder={field.placeholder}
        type={field.type || "text"}
        multiline={field.multiline || false}
        rows={field.rows || 1}
        fullWidth
        required
        variant="outlined"
        aria-label={`Campo ${field.label}`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={adornmentStyle}>
              <Icon />
            </InputAdornment>
          ),
        }}
        sx={(theme) => inputStyle(theme)}
      />
    </MotionBox>
  );
}
