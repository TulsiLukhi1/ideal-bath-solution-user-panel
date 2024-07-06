"use client";
import Container from "@/Components/Container";
import EnquiryCard from "@/Components/EnquiryCard";
import Nodata from "@/Components/Nodata";
import SearchField from "@/Components/SearchField";
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
      <div className="search-div">
        <span />
        <SearchField
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          label="Search Enquiry"
          placeholder="Product name"
        />
      </div>
      {loading ? (
        <WaterDropSpinner />
      ) : groupedEnquiries.size ? (
        <>
          {[...groupedEnquiries].map(([enquiryOn, enquiries], index) => {
            return (
              <div style={{ marginBottom: "4rem" }}>
                <div className="border-b mb-4 flex gap-x-2 text-xs items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <CalendarMonth color="warning" />
                    <p>
                      Enquiry made on{" "}
                      <b>{new Date(enquiryOn).toLocaleDateString()}</b> at{" "}
                      <b>{new Date(enquiryOn).toLocaleTimeString()}</b>
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs">Total :</span>{" "}
                    <span className="font-semibold text-orange-700 mono">
                      ({enquiries.length})
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
                  <div className=" mt-5" />
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
