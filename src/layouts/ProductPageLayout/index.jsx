"use client";
import ProductCard from "@/Components/ProductCard";
import { getProducts } from "@/utills/callers/product";
import { Box, Container, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const ProductPageLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  console.log("add products:")
  const fetchProducts = async () => {
    setLoading(true);
    const { products } = await getProducts(
      "/products",
      0,
      searchQuery
    );
    setTimeout(() => {
      setProducts(products);
      setLoading(false);
    }, 1000); // Simulating a delay for demonstration purposes
  };

  useEffect(() => {
    fetchProducts();
  }, [searchQuery]);

  return (
    <Container maxWidth={false} sx={{ padding: 0 }}>
      <Box sx={{ pt: '120px', pr: '30px', pl: '30px', pb: '50px' }}>
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '450px',
            }}
          >
            <PuffLoader color={theme.palette.primary.main} size={60} />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {products.map((product, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <ProductCard
                  name={product.productname}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  sx={{ height: '100%' }}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default ProductPageLayout;
