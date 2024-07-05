import { HelpCenter, Inventory } from "@mui/icons-material";

export const NO_IMAGE = process.env.NEXT_PUBLIC_NO_IMAGE;
export const MIN_DELAY_TIME = 700;

export const TOPBAR_MENU = [
  { label: "Products", href: "/", icon: <Inventory /> },
  { label: "Enquiries", href: "/enquiries", icon: <HelpCenter /> },
];

export const ROWS_PER_PAGE = 12;
export const getOptions = { cache: "no-cache" };
