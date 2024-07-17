"use client";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ProductCard from "../ProductCard";
const SuggestedProducts = ({ products }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Typography
        variant="h5"
        P
        gutterBottom
        fontWeight={700}
        marginBottom={10}
        sx={{
          textAlign: "center",
          position: "relative",
          "&::after": {
            content: '""',
            textAlign: "center",
            position: "absolute",
            bottom: "-20px",
            left: "30%",
            width: "40%",
            borderBottom: "3px solid #EA5806",
          },
        }}
      >
        SUGGESTED PRODUCTS
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          width: "calc(100% - 40px)",
          maxWidth: isMobile ? "100%" : 1200,
          margin: "0 auto",
          display: isMobile ? "block" : "flex",
        }}
      >
        {products.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              marginBottom: isMobile ? 4 : 0,
            }}
          >
            <ProductCard
              key={product._id}
              productId={product._id}
              productName={product.productname}
              description={product.description}
              brandName={product.brand.brandName}
              imgUrl={product.imgUrl}
              showFooter={false}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SuggestedProducts;
