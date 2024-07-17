import SpecificProductPage from "@/Components/SpecificProductPage";

const ProductPage = ({ params }) => {
  const WH_URL = process.env.WH_URL;
  const WH_TOKEN = process.env.WH_TOKEN;
  const WH_NUMBER_TO = process.env.WH_NUMBER_TO;
  const {productId} = params
  return (
    <SpecificProductPage
      productId = {productId}
      wh_number_to={WH_NUMBER_TO}
      wh_token={WH_TOKEN}
      wh_url={WH_URL}
    />
  );
};

export default ProductPage;
