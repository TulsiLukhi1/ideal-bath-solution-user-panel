"use client";

import Container from "@/Components/Container";
import ProductCard from "@/Components/ProductCard";
import WaterDropSpinner from "@/Components/WaterDropSpinner";
import NoData from "@/components/NoData";
import Notification from "@/components/Notification";
import { getProducts } from "@/utils/callers/products";
import { MIN_DELAY_TIME, ROWS_PER_PAGE } from "@/utils/constants";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ProductPageLayout = () => {
  const [openNotification, setOpenNotification] = React.useState(false);
  const [notificationInfo, setNotificationInfo] = React.useState({
    type: "success",
    message: "",
  });

  const [products, setProducts] = React.useState([]);
  const [offset, setOffest] = React.useState(0);
  const [totalProducts, setTotalProducts] = React.useState(0);
  const [loading, setLoading] = React.useState(false || !products?.length);
  const [alertInfo, setAlertInfo] = React.useState({ type: "", message: "" });
  const [displayAlert, setDisplayAlert] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, inView } = useInView();

  const fetchProducts = async () => {
    setLoading(true);
    const {
      products,
      totalProducts: total,
      errorMessage,
      status,
    } = await getProducts(
      "/products",
      !searchQuery && !offset ? 0 : offset,
      ROWS_PER_PAGE,
      searchQuery.trim()
    );

    // sucess status code is 2xx
    if (status >= 200 && status < 300) {
      setTimeout(() => {
        setProducts(products);
        setOffest(products.length);
        setTotalProducts(total);
        setLoading(false);
      }, MIN_DELAY_TIME);
    }

    // client error status code is 4xx
    if (status >= 400 && status < 500) {
      setLoading(false);
      setDisplayAlert(true);
      setAlertInfo({ type: "error", message: `${errorMessage}` });
      setTotalProducts(0);
      setProducts([]);
      return;
    }

    // server error status code is 5xx
    if (status >= 500 && status < 600) {
      setLoading(false);
      setDisplayAlert(true);
      setAlertInfo({
        type: "error",
        message: `Error : ${errorMessage}`,
      });
      setTotalProducts(0);
      setProducts([]);
      return;
    }
  };

  const searchProducts = async () => {
    setOffest(0);
    setTotalProducts(0);
    setProducts([]);
    setLoading(true);
    const {
      products,
      totalProducts: total,
      errorMessage,
      status,
    } = await getProducts(
      "/products",
      0,
      ROWS_PER_PAGE,
      searchQuery.trim()
    );

    // sucess status code is 2xx
    if (status >= 200 && status < 300) {
      setTimeout(() => {
        setProducts(products);
        setOffest(products.length);
        setTotalProducts(total);
        setLoading(false);
      }, MIN_DELAY_TIME);
    }

    // client error status code is 4xx
    if (status >= 400 && status < 500) {
      setLoading(false);
      setDisplayAlert(true);
      setAlertInfo({ type: "error", message: `${errorMessage}` });
      setTotalProducts(0);
      setProducts([]);
      return;
    }

    // server error status code is 5xx
    if (status >= 500 && status < 600) {
      setLoading(false);
      setDisplayAlert(true);
      setAlertInfo({
        type: "error",
        message: `Error : ${errorMessage}`,
      });
      setTotalProducts(0);
      setProducts([]);
      return;
    }
  };

  const loadMoreProducts = async () => {
    const {
      products: fetchedProducts,
      totalProducts: total,
      errorMessage,
      status,
    } = await getProducts(
      "/products",
      !searchQuery && !offset ? 0 : offset,
      ROWS_PER_PAGE,
      searchQuery.trim()
    );

    // sucess status code is 2xx
    if (status >= 200 && status < 300) {
      setTimeout(() => {
        setProducts([...products, ...fetchedProducts]);
        setOffest((prevOffset) => prevOffset + fetchedProducts.length);
        setTotalProducts(total);
      }, MIN_DELAY_TIME);
    }

    // client error status code is 4xx
    if (status >= 400 && status < 500) {
      setDisplayAlert(true);
      setAlertInfo({ type: "error", message: `${errorMessage}` });
      setProducts([]);
      setTotalProducts(0);
      return;
    }

    // server error status code is 5xx
    if (status >= 500 && status < 600) {
      setDisplayAlert(true);
      setAlertInfo({
        type: "error",
        message: `Error : ${errorMessage}`,
      });
      setProducts([]);
      setTotalProducts(0);
      return;
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  React.useEffect(() => {
    searchProducts();
  }, [searchQuery]);

  React.useEffect(() => {
    if (inView) loadMoreProducts();
  }, [inView]);

  return (
    <Container>
      <Notification
        message={notificationInfo.message}
        open={openNotification}
        setOpen={setOpenNotification}
        type={notificationInfo.type}
      />
      <div className="search-div">
        <TextField
          type="search"
          label="Search products"
          placeholder="Name or Brand"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="small"
          style={{ marginLeft: "auto" }}
        />
      </div>

      {loading ? (
        <WaterDropSpinner />
      ) : products.length ? (
        <>
          <div className="grid-container">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                offset={offset}
                setOffest={setOffest}
                productName={product.productname}
                description={product.description}
                brandName={product.brand.brandName}
                imgUrl={product.imgUrl}
              />
            ))}
          </div>

          <div className="w-full mt-5">
            <div ref={ref}>
              {offset < totalProducts ? <div className="loader" /> : ""}
            </div>
          </div>
        </>
      ) : (
        <NoData width={250} />
      )}
    </Container>
  );
};

export default ProductPageLayout;
