"use client";
import SpecificProductCard from "@/components/SpecificProductCard";
import Loader from "@/Components/Spinner";
import SuggestedProducts from "@/Components/SuggestedProducts";
import { getProductById, getProducts } from "@/utils/callers/products";
import { MIN_DELAY_TIME } from "@/utils/constants";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const ProductPage = ({ params }) => {
  const { productId } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getProductById(productId);
        if (response.status === 200) {
          setProduct(response.product);
          const {
            products,
            totalProducts: total,
            errorMessage,
            status,
          } = await getProducts(
            "/products",
            0,
            6,
            "",
            response.product.brand._id
          );
          console.log("products", products);

          if (status >= 200 && status < 300) {
            setTimeout(() => {
              setSuggestedProducts(products);
              setLoading(false);
            }, MIN_DELAY_TIME);
          }

          if (status >= 400 && status < 600) {
            setLoading(false);
            setSuggestedProducts([]);
            return;
          }
        } else {
          setError(response.errorMessage);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <>
      <Grid spacing={4}>
        <Grid item xs={12}>
          <SpecificProductCard
            brand={product.brand.brandName}
            productName={product.productname}
            description={product.description}
            price={product.price}
            image="/images/idealbathphoto.png"
          />
        </Grid>
      </Grid>

      <Box mt={12}>
        <SuggestedProducts products={suggestedProducts} />
      </Box>
    </>
  );
};

export default ProductPage;
