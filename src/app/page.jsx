import ProductPageLayout from "@/layouts/ProductPageLayout";

const ProductsPage = () => {
  const WH_URL = process.env.WH_URL;
  const WH_TOKEN = process.env.WH_TOKEN;
  const WH_NUMBER_TO = process.env.WH_NUMBER_TO;

  return (
    <ProductPageLayout
      wh_url={WH_URL}
      wh_token={WH_TOKEN}
      wh_number_to={WH_NUMBER_TO}
    />
  );
};

export default ProductsPage;

export async function generateMetadata() {
  return {
    title: "Products - Ideal Bath Solutions",
    description: "Products",
  };
}
