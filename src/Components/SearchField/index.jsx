"use client";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function SearchField({
  searchQuery = "",
  setSearchQuery = () => {},
  label = "",
  placeholder = "",
}) {
  const [focused, setFocused] = useState(false);

  return (
    <TextField
      type="search"
      label={label}
      placeholder={placeholder}
      variant="outlined"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      size="small"
      style={{
        width: focused ? "500px" : "300px",
        transition: "width 0.3s ease-in-out",
        borderRadius: "5rem",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}
