import ProfileImage from "@/assets/profile-demo.jpg";
import { HelpCenter, Inventory } from "@mui/icons-material";

export const NO_IMAGE = process.env.NEXT_PUBLIC_NO_IMAGE;

export const TOPBAR_MENU = [
  { label: "Products", href: "/", icon: <Inventory fontSize="small" /> },
  {
    label: "Enquiries",
    href: "/enquiries",
    icon: <HelpCenter fontSize="small" />,
  },
];

export const SIDEBAR_MENU = [
  { label: "Products", href: "/", icon: <Inventory /> },
  { label: "Enquiries", href: "/enquiries", icon: <HelpCenter /> },
];

export const MIN_DELAY_TIME = 200;
export const ROWS_PER_PAGE = 12;
export const getOptions = { cache: "no-cache" };
export const postOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};


export const profile = {
  _id: "667d31eecb076512693e5538",
  userName: "JaneSmith",
  mobileNumber: "9765432159",
  imgUrl: ProfileImage,
  createdAt : "28.04.2024"
};
