import React, { useState } from "react";
import { TextField } from "@mui/material";

const MUITextField = ({
  multiline,
  rows,
  name,
  label,
  type,
  value,
  error,
  helperText,
  onChange,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextField
      fullWidth
      multiline={multiline}
      rows={rows}
      name={name}
      label={label}
      type={type}
      value={value}
      error={error}
      helperText={helperText}
      onChange={onChange}
      onBlur={onBlur}
      variant="outlined"
      InputLabelProps={{ style: { color: "#ffffff80" } }}
      sx={{
        backgroundColor: "#ffffff0d",
        color: "#fff",
        borderRadius: "5px",

        "& .MuiOutlinedInput-input": { color: "#ffffff" },
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ffffff26" },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "#ffffff80",
          },
        },
      }}
      style={{ backgroundColor: "transparent" }}
    />
  );
};

export default MUITextField;
