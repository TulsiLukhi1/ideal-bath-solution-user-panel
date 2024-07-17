import { createEnquiry } from "@/utils/callers/enquiries";
import { NO_IMAGE, profile } from "@/utils/constants";
import { sendWhatsappMsg } from "@/utils/Helpers/sendWhatsappMsg";
import { whMsg } from "@/utils/Helpers/whMsg";
import CategoryIcon from "@mui/icons-material/Category";
import { Tooltip } from "@mui/joy";
import * as React from "react";
import CutText from "../CutText";
import Notification from "../Notification";
import QuantityInput from "../QuantityInput";

import { useRouter } from "next/navigation";

export default function ProductCard({
  productId = "",
  productName = "",
  brandName = "",
  description = "",
  imgUrl = "",
  wh_token = "",
  wh_url = "",
  wh_number_to = "",
  showFooter = true,
}) {
  const [quantity, setQuantity] = React.useState(1);
  const [openNotification, setOpenNotification] = React.useState(false);
  const [notificationInfo, setNotificationInfo] = React.useState({
    type: "success",
    message: "",
  });

  const [isVisible, setIsVisible] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  async function enquirySender() {
    const url = process.env.NEXT_PUBLIC_DOMAIN;
    const msg = whMsg(
      productName,
      brandName,
      quantity,
      `${url}/products/${productId}`,
      profile.mobileNumber,
      profile.userName,
      profile.createdAt
    );

    const result = await createEnquiry("enquiries", [
      { user: profile._id, product: productId },
    ]);

    // success status code is 2xx
    if (result.status >= 200 && result.status < 300) {
      await sendWhatsappMsg(wh_token, wh_url, wh_number_to, msg);
      setOpenNotification(true);
      setNotificationInfo({
        type: "success",
        message: "Enquiry sent",
      });
      setQuantity(1);
    }

    // client error status code is 4xx
    if (result.status >= 400 && result.status < 500) {
      setOpenNotification(true);
      setNotificationInfo({ type: "error", message: `${result.errorMessage}` });
      return;
    }

    // server error status code is 5xx
    if (result.status >= 500 && result.status < 600) {
      setOpenNotification(true);
      setNotificationInfo({
        type: "error",
        message: `Error : ${result.errorMessage}`,
      });
      return;
    }
  }

  function handleCardClick() {
    router.push(`/product/${productId}`);
  }

  function handleQuantityChange(e, value) {
    e.stopPropagation(); // Prevents event bubbling
    setQuantity(value);
  }

  return (
    <div
      className={`transition-transform duration-500 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Notification
        message={notificationInfo.message}
        open={openNotification}
        setOpen={setOpenNotification}
        type={notificationInfo.type}
      />
      <div className="w-full relative flex flex-col gap-y-2 overflow-hidden shadow rounded-md transition-shadow duration-300 hover:shadow-xl">
        {/* Body */}
        <Tooltip title={brandName} color="primary" arrow placement="left">
          <CategoryIcon
            fontSize="small"
            color="primary"
            className=" absolute right-2 top-2 shadow-lg rounded-full w-7 p-[.2rem]"
          />
        </Tooltip>
        <div onClick={handleCardClick}>
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src={imgUrl || NO_IMAGE}
            alt={productName[0]}
          />
        </div>
        <div className="flex flex-col h-full">
          <div className="flex flex-col justify-between items-start sm:px-6 px-4 py-2">
            <div className="font-semibold sm:text-lg text-base mb-1 capitalize">
              {" "}
              <CutText className="liner-1">{productName}</CutText>
            </div>
          </div>
          <div className="text-gray-700 sm:text-sm mt-auto text-xs sm:px-6 px-4 mb-4">
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
        {showFooter && (
          <div className="flex justify-between items-center sm:px-6 px-4 pt-2 pb-4 mt-auto">
            <QuantityInput
              value={quantity}
              label="Page no."
              min={1}
              decrementDisabled={quantity === 1}
              onChange={handleQuantityChange}
            />
            <button
              variant="outlined"
              className="enquiry-btn-grad"
              onClick={enquirySender}
            >
              Do Enquiry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
