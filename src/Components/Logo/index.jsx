import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Dancing_Script, Oswald } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const oswald = Oswald({ subsets: ['latin'] });

const Logo = () => {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center">
      <svg
        width="200"
        height="50"
        viewBox="0 0 200 55"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="0" y="32" className={dancingScript.className} fontSize="40" fill="black" fontWeight={900}>
          Ideal Bath
        </text>
        <text x="22" y="52" className={oswald.className} fontSize="15" fill={theme.palette.primary.main} fontWeight="bold" alignItems="center" letterSpacing={6} >
          SOLUTIONS
        </text>
      </svg>
    </Box>
  );
};

export default Logo;
