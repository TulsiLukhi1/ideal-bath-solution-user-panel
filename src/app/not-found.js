"use client"
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      bgcolor="#f0f4f8"
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Page Not Found.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, we can’t find the page you’re looking for.
      </Typography>
      <Button
        onClick={() => router.push('/')}
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          bgcolor: theme.palette.primary.main,
          color: '#ffffff',
          height: '42px',
          width: '200px',
          padding: '8px',
          borderRadius: '15px',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          padding: '10px 10px',
          fontSize: '16px',
          mt: '0.5rem',
          '&:hover': {
            bgcolor: `${theme.palette.primary.main}`,
          },
        }}
      >
        Back to Home
      </Button>
      <Box
        position="absolute"
        bottom={16}
        textAlign="center"
      >
        <Typography variant="body2" color="textSecondary">
          © 2024 Ideal Bath Solutions. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
