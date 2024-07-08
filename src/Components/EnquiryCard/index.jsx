import CutText from "@/Components/CutText";
import { ContactSupport, Launch } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const EnquiryCard = ({ productId = "", productName = "", brandName = "" }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to trigger the animation smoothly

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`border bg-white rounded-md w-full hover:shadow transition-transform duration-500 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ padding: "1.5rem" }}
    >
      <div>
        <ContactSupport color="secondary" />
      </div>
      <div>
        <Link
          href={`/products/${productId}`}
          className="flex justify-between items-center hover:underline no-underline mb-2 xl:text-xl lg:text-lg text-base font-semibold tracking-tight text-gray-900"
        >
          <CutText className="liner-1 underline">{productName} </CutText>
          <Launch color="warning" />
        </Link>
      </div>
      <div>
        <p className="font-normal text-gray-500 lg:text-base sm:text-sm text-xs">
          <CutText className="liner-1">{brandName}</CutText>
        </p>
      </div>
    </div>
  );
};

export default EnquiryCard;
