import CutText from "@/Components/CutText";
import { ContactSupport, Launch } from "@mui/icons-material";
import Link from "next/link";

const EnquiryCard = ({ productId = "", productName = "", brandName = "" }) => {
  return (
    <div
      className="border bg-white rounded-md w-full hover:shadow"
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
