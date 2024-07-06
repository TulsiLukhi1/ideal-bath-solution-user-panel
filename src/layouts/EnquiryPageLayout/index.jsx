"use client";
import Container from "@/Components/Container";
import EnquiryCard from "@/Components/EnquiryCard";
import Nodata from "@/Components/Nodata";
import SerachFilterPanel from "@/Components/SerachFilterPanel";
import WaterDropSpinner from "@/Components/WaterDropSpinner";
import { getEnquiriesByUserId } from "@/utils/callers/enquiries";
import { MIN_DELAY_TIME } from "@/utils/constants";
import { groupEnquiriesByDate } from "@/utils/Helpers/groupEnquiriesByDate";
import { CalendarMonth } from "@mui/icons-material";
import React from "react";

const EnquiryPageLayout = () => {
  const [enquiries, setEnquiries] = React.useState([]);
  const [totalEnquiries, setTotalEnquiries] = React.useState(0);
  const [loading, setLoading] = React.useState(false || !enquiries?.length);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [alertInfo, setAlertInfo] = React.useState({ type: "", message: "" });
  const [displayAlert, setDisplayAlert] = React.useState(false);
  const [groupedEnquiries, setGroupedEnquiries] = React.useState(new Map());

  const fetchEnquiries = async () => {
    setLoading(true);
    const {
      enquiries,
      totalEnquiries: total,
      errorMessage,
      status,
    } = await getEnquiriesByUserId(
      "/enquiries/users/667d31eecb076512693e553c",
      searchQuery.trim()
    );

    // sucess status code is 2xx
    if (status >= 200 && status < 300) {
      setTimeout(() => {
        setEnquiries(enquiries);
        setGroupedEnquiries(groupEnquiriesByDate(enquiries));
        setTotalEnquiries(total);
        setLoading(false);
      }, MIN_DELAY_TIME);
    }

    // client error status code is 4xx
    if (status >= 400 && status < 500) {
      setLoading(false);
      setDisplayAlert(true);
      setAlertInfo({ type: "error", message: `${errorMessage}` });
      setTotalEnquiries(0);
      setEnquiries([]);
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
      setTotalEnquiries(0);
      setEnquiries([]);
      return;
    }
  };

  React.useEffect(() => {
    fetchEnquiries();
  }, [searchQuery]);

  return (
    <Container>
      <SerachFilterPanel
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search enquiry by product name"
      />
      {loading ? (
        <WaterDropSpinner />
      ) : groupedEnquiries.size ? (
        <>
          {[...groupedEnquiries].map(([enquiryOn, enquiries], index) => {
            return (
              <div
                style={{ marginBottom: "2rem" }}
                className="p-4 rounded-md bg-gray-50"
              >
                <div className="border-b py-4 rounded-md mb-4 flex text-xs items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <CalendarMonth color="warning" />
                    <p>
                      Enquiry made on{" "}
                      <u>{new Date(enquiryOn).toLocaleDateString()}</u> at{" "}
                      <u>{new Date(enquiryOn).toLocaleTimeString()}</u>
                    </p>
                  </div>
                  <div>
                    <span
                      className="font-semibold text-orange-700 mono rounded-full border"
                      style={{ padding: "2px" }}
                    >
                      {enquiries.length}
                    </span>
                  </div>
                </div>
                <div className="grid-container">
                  {enquiries.map((enquiry) => (
                    <EnquiryCard
                      brandName={enquiry.product.brand.brandName}
                      productId={enquiry.product._id}
                      productName={enquiry.product.productname}
                    />
                  ))}
                </div>
                {index < groupedEnquiries.size - 1 ? (
                  <div className="mt-5" />
                ) : null}
              </div>
            );
          })}
        </>
      ) : (
        <Nodata width={250} />
      )}
    </Container>
  );
};

export default EnquiryPageLayout;
