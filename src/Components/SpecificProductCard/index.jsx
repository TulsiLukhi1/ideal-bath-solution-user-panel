"use client";
import { useState } from "react";
import { NO_IMAGE, profile } from "@/utils/constants";

import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import QuantityInput from "../QuantityInput";
import { whMsg } from "@/utils/Helpers/whMsg";
import { sendWhatsappMsg } from "@/utils/Helpers/sendWhatsappMsg";
import { createEnquiry } from "@/utils/callers/enquiries";
import Notification from "../Notification";


const SpecificProductCard = ({
  productId,
  brand,
  productName,
  description,
  price,
  image,
  wh_token = "",
  wh_url = "",
  wh_number_to = "",
}) => {

  const [quantity, setQuantity] = useState(0);
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationInfo, setNotificationInfo] = useState({
    type: "success",
    message: "",
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleQuantityChange = (event, newQuantity) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  
  async function enquirySender() {
    const url = process.env.NEXT_PUBLIC_DOMAIN;
    const msg = whMsg(
      productName,
      brand,
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
      console.log("inside 200 status",wh_token);
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
  return (
    <Card
      sx={{
        display: isMobile ? "block" : "flex",
        boxShadow: "none",
        margin: isMobile ? "0" : "0 10rem",
        alignContent: "center",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: isMobile ? "100%" : 350,
          borderRadius: "10px",
          marginBottom: isMobile ? "1rem" : 0,
        }}
        image={image}
        alt="product image"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: isMobile ? 0 : "3rem",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto", alignContent: "center" }}>
          <Notification
            message={notificationInfo.message}
            open={openNotification}
            setOpen={setOpenNotification}
            type={notificationInfo.type}
          />
          <Typography
            component="div"
            variant={isMobile ? "subtitle1" : "h5"}
            fontWeight={600}
            marginBottom="10px"
            textAlign={ "isMobile" ? "left" : "inherit"}
          >
            {brand}
          </Typography>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            color="#EA5806"
            component="div"
            marginBottom="10px"
            background="red"
            textAlign="left"
            fontWeight="700"
          >
            {productName}
          </Typography>
          <Typography
            variant={isMobile ? "body2" : "body1"}
            component="div"
            marginBottom="10px"
            className="text-gray-400 sm:text-sm"
            textAlign="left"
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "start",
            }}
          >
            <Box
              marginRight={isMobile ? "0" : "3rem"}
              marginBottom={isMobile ? "1rem" : "0"}
              width={isMobile ? "100%" :"inherit"}
              display="flex"
              flexDirection={isMobile ? "row" : "column"}
              alignItems={isMobile ? "center" : "inherit"}
              justifyContent="space-evenly"
            >
              <Typography
                variant={isMobile ? "subtitle2" : "subtitle1"}
                fontSize="16px"
                component="div"
                fontWeight={600}
                marginBottom={isMobile ? "0" : "10px"}
              >
                QUANTITY
              </Typography>
              <QuantityInput
                value={quantity}
                onChange={handleQuantityChange}
                min={0}
              />
            </Box>
            <Box marginTop={isMobile ? "0" : "2.3rem"} width="100%">
              <ButtonBase
                onClick={enquirySender}
                className="enquiry-btn-grad"
                sx={{
                  borderRadius: "10px",
                  padding: "10px 32px",
                  color: "white",
                  width: isMobile ? "100%" : "auto",
                }}
              >
                Do Enquiry
              </ButtonBase>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default SpecificProductCard;
