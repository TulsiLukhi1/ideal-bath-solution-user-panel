"use client";

import Container from "@/Components/Container";
import Nodata from "@/Components/Nodata";
import ProductCard from "@/Components/ProductCard";
import SerachFilterPanel from "@/Components/SerachFilterPanel";
import WaterDropSpinner from "@/Components/WaterDropSpinner";
import { getProducts } from "@/utils/callers/products";
import { MIN_DELAY_TIME, ROWS_PER_PAGE } from "@/utils/constants";
import { useWindowWidth } from "@react-hook/window-size";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ProductPageLayout = () => {
  const [products, setProducts] = React.useState([]);
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const [offset, setOffest] = React.useState(0);
  const [totalProducts, setTotalProducts] = React.useState(0);
  const [loading, setLoading] = React.useState(false || !products?.length);
  const [searchQuery, setSearchQuery] = useState("");
  const [openFilter, setOpenFilter] = React.useState(false);
  const [alertInfo, setAlertInfo] = React.useState({ type: "", message: "" });
  const [displayAlert, setDisplayAlert] = React.useState(false);
  const { ref, inView } = useInView();

  const screenWidth = useWindowWidth();

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
      searchQuery.trim(),
      selectedBrands
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
      searchQuery.trim(),
      selectedBrands
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

  const filterProducts = async (brandIds) => {
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
      searchQuery.trim(),
      brandIds
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
      searchQuery.trim(),
      selectedBrands
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

  function filterHandler(selectedBrands) {
    setSelectedBrands(selectedBrands);
    filterProducts(selectedBrands);
  }

  React.useEffect(() => {
    fetchProducts();
  }, []);

  React.useEffect(() => {
    searchProducts();
  }, [searchQuery]);

  React.useEffect(() => {
    searchProducts();
  }, [searchQuery]);

  React.useEffect(() => {
    if (inView) loadMoreProducts();
  }, [inView]);

  return (
    <>
      <SerachFilterPanel
        isFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        filterHandler={filterHandler}
        placeholder="Search products by name or brand"
      />
      <Container>
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
          <Nodata width={250} />
        )}
      </Container>
    </>
  );
};

export default ProductPageLayout;
