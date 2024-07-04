import ProductPageLayout from "@/layouts/ProductPageLayout";

const ProductsPage = () => {
  return <ProductPageLayout />;
};

export default ProductsPage;

export async function generateMetadata() {
  return {
    title: "Products - Ideal Bath Solutions",
    description: "Products",
  };
}
