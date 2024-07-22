"use client";
import { Add, Remove } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";

const QuantitySelector = ({ price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <IconButton onClick={handleDecrement}>
        <Remove />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={handleIncrement}>
        <Add />
      </IconButton>
      <Typography variant="h6" sx={{ marginLeft: "auto" }}>
        Total: ${quantity * price}
      </Typography>
      <Button variant="contained" color="primary">
        Do Enquiry
      </Button>
    </Box>
  );
};

export default QuantitySelector;
