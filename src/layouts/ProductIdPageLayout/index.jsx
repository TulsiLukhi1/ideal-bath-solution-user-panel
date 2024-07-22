import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ProductIdPageLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Box
        sx={{
          borderBottom: "2px solid #e6e6e6",
          padding: "16px 32px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "white",
        }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={
            <NavigateNextIcon sx={{ color: "black" }} fontSize="small" />
          }
        >
          <Link underline="hover" color="black" href="/">
            Home
          </Link>
          <Link underline="hover" color="black" href="/category">
            Category
          </Link>
          <Typography color="#EA5806">Product</Typography>
        </Breadcrumbs>
      </Box>
      <Box p={isMobile ? 4 : 8}>{children}</Box>
    </Box>
  );
};

export default ProductIdPageLayout;
