import { NO_IMAGE } from "@/utils/constants";
import CategoryIcon from "@mui/icons-material/Category";
import { Tooltip } from "@mui/joy";
import * as React from "react";
import CutText from "../CutText";
import QuantityInput from "../QuantityInput";

export default function ProductCard({
  productName = "",
  brandName = "",
  description = "",
  imgUrl = "",
}) {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="w-full relative flex flex-col gap-y-2 overflow-hidden bg-gray-50 rounded-md transition-shadow duration-300 hover:shadow-xl">
      {/* Body */}
      <Tooltip title={brandName} color="primary" arrow placement="left">
        <CategoryIcon
          fontSize="small"
          color="primary"
          className=" absolute right-2 top-2 shadow-lg rounded-full w-7 p-[.2rem]"
        />
      </Tooltip>
      <div>
        <img
          className="w-full h-48 object-cover rounded-md mb-4"
          src={imgUrl || NO_IMAGE}
          alt={productName[0]}
        />
      </div>
      <div className="flex flex-col h-full">
        <div className="flex flex-col justify-between items-start sm:px-6 px-4 py-2">
          {/* <div className="text-gray-600 sm:text-sm text-xs font-medium flex gap-x-2 justify-start items-center">
            <CategoryIcon
              fontSize="small"
              color="primary"
              className=" absolute shadow-lg rounded-full w-7 p-[.2rem]"
            />
            <CutText className="liner-1">{brandName}</CutText>
          </div> */}
          <div className="font-semibold sm:text-lg text-base mb-1 capitalize">
            {" "}
            <CutText className="liner-1">{productName}</CutText>
          </div>
        </div>
        <div className="text-gray-700 sm:text-sm mt-auto text-xs sm:px-6 px-4">
          <CutText className="liner-2">
            {description ? (
              description
            ) : (
              <span className="text-gray-400">No description.</span>
            )}
          </CutText>
        </div>
      </div>
      {/* Footer */}
      <div className="flex justify-between items-center sm:px-6 px-4 pt-2 pb-4 mt-auto">
        <QuantityInput
          value={quantity}
          label="Page no."
          min={1}
          decrementDisabled={quantity === 1}
          onChange={(e, value) => setQuantity(value)}
        />
        <button
          variant="outlined"
          className="text-orange-600 font-medium sm:text-base text-sm shadow bg-white bg-opacity-10 hover:bg-opacity-100 px-4 py-2"
        >
          Do Enquiry
        </button>
      </div>
    </div>
  );
}
