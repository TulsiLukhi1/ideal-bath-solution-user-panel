import ProductPageLayout from "@/layouts/ProductPageLayout";

const ProductsPage = ({ searchQuery }) => {
  console.log("inside page.js", searchQuery);
  return <ProductPageLayout searchQuery={searchQuery} />;
};

export default ProductsPage;

export async function generateMetadata() {
  return {
    title: "Products - Ideal Bath Solutions",
    description: "Products",
  };
}
