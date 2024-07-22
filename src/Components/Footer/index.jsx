import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { useTheme } from '@emotion/react';

const Footer = () => {
    const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 
           `${theme.palette.primary.main}10`,
      }}
    >
      <Container maxWidth="sm">
       <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="#" sx={{color: theme.palette.primary.main , textDecoration:"none"}}>
            Ideal Bath Solutions
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
