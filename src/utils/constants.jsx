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

export const profile = {
  userName: "John Duo",
  mobileNumber: "9876389137",
  imgUrl: ProfileImage,
};
